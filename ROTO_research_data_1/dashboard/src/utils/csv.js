export const parseCSV = (input) => {
  const rows = []
  let row = []
  let value = ''
  let i = 0
  let inQuotes = false

  const pushValue = () => {
    row.push(value)
    value = ''
  }

  const pushRow = () => {
    if (row.length === 1 && row[0] === '' && rows.length > 0) {
      row = []
      return
    }
    rows.push(row)
    row = []
  }

  while (i < input.length) {
    const char = input[i]
    const next = input[i + 1]

    if (char === '"') {
      if (inQuotes && next === '"') {
        value += '"'
        i += 2
        continue
      }
      inQuotes = !inQuotes
      i += 1
      continue
    }

    if (!inQuotes && char === ',') {
      pushValue()
      i += 1
      continue
    }

    if (!inQuotes && (char === '\n' || char === '\r')) {
      pushValue()
      if (char === '\r' && next === '\n') i += 1
      pushRow()
      i += 1
      continue
    }

    value += char
    i += 1
  }

  if (value.length > 0 || row.length > 0) {
    pushValue()
    pushRow()
  }

  return rows
}

const splitNumberedText = (rawText) => {
  if (!rawText) return []
  const cleanText = rawText.replace(/\r/g, '').trim()
  if (!cleanText) return []

  const withMarkers = cleanText.replace(/\n\s*(\d+\.)\s*/g, '\n@@$1 ')
  const chunks = withMarkers
    .split('@@')
    .map((part) => part.trim())
    .filter(Boolean)

  if (chunks.length <= 1) {
    return cleanText
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
  }

  return chunks.map((chunk) => chunk.replace(/^\d+\.\s*/, '').trim()).filter(Boolean)
}

export const buildDashboardData = (summaryCsv, rawCsv) => {
  const summaryRows = parseCSV(summaryCsv)
  const rawRows = parseCSV(rawCsv)

  const summaryHeader = summaryRows[0] || []
  const summaryRespondent1Index = summaryHeader.findIndex((v) => v.includes('受访者1'))
  const summaryMap = new Map()

  summaryRows.slice(1).forEach((row) => {
    const key = (row[0] || '').trim()
    const value = (row[summaryRespondent1Index] || '').trim()
    if (key && value) summaryMap.set(key, value)
  })

  const rawHeader = rawRows[0] || []
  const idx = {
    id: rawHeader.findIndex((v) => v.includes('问题编号')),
    question: rawHeader.findIndex((v) => v.includes('问题内容')),
    respondent1: rawHeader.findIndex((v) => v.includes('受访者1')),
  }

  const interviewRows = rawRows
    .slice(1)
    .map((row) => {
      const idValue = (row[idx.id] || '').trim()
      const id = Number(idValue)
      const question = (row[idx.question] || '').trim()
      if (!Number.isFinite(id) || !question) return null

      const r1 = (row[idx.respondent1] || '').trim()

      return {
        id,
        question,
        answers: {
          'Sabrina（受访者1）': r1 || '0',
          受访者2: '0',
          受访者3: '0',
          受访者4: '0',
          受访者5: '0',
        },
        searchable: `${question} ${r1}`.toLowerCase(),
      }
    })
    .filter(Boolean)

  const overview = splitNumberedText(summaryMap.get('总结') || '')
  const coreFindings = splitNumberedText(summaryMap.get('核心发现') || '')
  const creatorExperience = splitNumberedText(summaryMap.get('个人\n创作经验') || '')

  return {
    summary: {
      overview,
      coreFindings,
      creatorExperience,
    },
    raw: interviewRows,
    metrics: {
      totalRespondents: 5,
      activeRespondents: interviewRows.some((row) => row.answers['Sabrina（受访者1）'] !== '0') ? 1 : 0,
      totalQuestions: interviewRows.length,
      findingsCount: coreFindings.length,
    },
  }
}
