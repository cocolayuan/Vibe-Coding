import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const respondents = ['Sabrina（受访者1）', '受访者2', '受访者3', '受访者4', '受访者5']

const RawDataExplorer = ({ data }) => {
  const [search, setSearch] = useState('')
  const [selectedRespondent, setSelectedRespondent] = useState('Sabrina（受访者1）')

  const filteredRows = useMemo(() => {
    const keyword = search.trim().toLowerCase()
    let rows = data.raw

    if (keyword) {
      rows = rows.filter((row) => {
        const answerText = String(row.answers[selectedRespondent] ?? '').toLowerCase()
        return row.question.toLowerCase().includes(keyword) || answerText.includes(keyword)
      })
    }

    rows = [...rows].sort((a, b) => a.id - b.id)

    return rows
  }, [data.raw, search, selectedRespondent])

  return (
    <div className="glass-panel p-4 sm:p-6 space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">原始访谈数据</h2>
        </div>
        <div className="relative w-full lg:w-[360px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="搜索问题或访谈内容..."
            className="w-full h-11 pl-9 pr-3 rounded-xl bg-white/10 border border-border text-sm text-text-secondary placeholder:text-text-tertiary focus:outline-none focus:border-accent/50"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {respondents.map((name) => (
          <button
            key={name}
            onClick={() => setSelectedRespondent(name)}
            className={`h-10 px-4 rounded-full border text-sm transition-all ${
              selectedRespondent === name
                ? 'border-accent/45 bg-accent/15 text-accent'
                : 'border-border bg-white/5 text-text-secondary hover:border-border-hover'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-white/5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1060px] text-left">
            <thead className="bg-white/5 border-b border-border">
              <tr>
                <th className="w-[70px] px-4 py-3 text-xs text-text-secondary">
                  NO.
                </th>
                <th className="w-[34%] px-4 py-3 text-xs text-text-secondary">
                  调研提纲 / 问题
                </th>
                <th className="w-[60%] px-4 py-3 text-xs text-text-secondary">详细回复内容</th>
              </tr>
            </thead>

            <tbody>
              {filteredRows.map((row) => {
                const answer = row.answers[selectedRespondent]
                const isPlaceholder = answer === '0'

                return (
                  <tr key={`${selectedRespondent}-${row.id}`} className="border-b border-border/60 align-top">
                    <td className="px-4 py-6 text-2xl text-text-tertiary font-semibold">{row.id}</td>
                    <td className="px-4 py-6">
                      <p className="text-lg sm:text-xl leading-relaxed font-semibold text-text-primary">{row.question}</p>
                    </td>
                    <td className="px-4 py-5">
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.22 }}
                        className="rounded-2xl border border-border/70 bg-[#22314a99] px-6 py-5"
                      >
                        <p className={`text-lg sm:text-xl leading-relaxed font-medium ${isPlaceholder ? 'text-text-tertiary' : 'text-text-secondary'}`}>
                          {isPlaceholder ? '0' : answer}
                        </p>
                      </motion.div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {selectedRespondent === 'Sabrina（受访者1）' && (
        <section className="glass-card p-4 sm:p-5 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-text-primary">Sabrina 洞察结构</h3>
          </div>

          <div className="space-y-4">
            {[
              { title: '总结概览', items: data.summary.overview },
              { title: '核心发现', items: data.summary.coreFindings },
            ].map((block) => (
              <div key={block.title} className="rounded-xl border border-border/70 bg-white/5 p-3 sm:p-4">
                <h4 className="text-sm font-medium text-text-primary mb-2">{block.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">
                  {block.items.join('；\n')}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="text-xs text-text-muted">更新日期 2026 - 02 - 06</p>
    </div>
  )
}

export default RawDataExplorer
