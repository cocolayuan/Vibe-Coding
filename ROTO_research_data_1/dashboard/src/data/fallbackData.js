import { rawInterviewData, summaryInsights } from './researchData'

const toDashboardShape = () => {
  const raw = rawInterviewData.map((item) => ({
    id: item.id,
    question: item.question,
    answers: {
      'Sabrina（受访者1）': item.answer || '0',
      受访者2: '0',
      受访者3: '0',
      受访者4: '0',
      受访者5: '0',
    },
    searchable: `${item.question} ${item.answer}`.toLowerCase(),
  }))

  return {
    summary: {
      overview: summaryInsights.painPoints.map((p) => p.label),
      coreFindings: summaryInsights.findings.map((f) => f.description),
      creatorExperience: summaryInsights.creatorExperience.map((e) => `${e.title}：${e.description}`),
    },
    raw,
    metrics: {
      totalRespondents: 5,
      activeRespondents: 1,
      totalQuestions: raw.length,
      findingsCount: summaryInsights.findings.length,
    },
  }
}

export const fallbackDashboardData = toDashboardShape()
