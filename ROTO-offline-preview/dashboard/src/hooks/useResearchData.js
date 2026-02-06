import { useEffect, useState } from 'react'
import { buildDashboardData } from '../utils/csv'
import { fallbackDashboardData } from '../data/fallbackData'

export const useResearchData = () => {
  const [state, setState] = useState({
    loading: true,
    error: '',
    data: null,
  })

  useEffect(() => {
    let alive = true

    const load = async () => {
      try {
        const [summaryResponse, rawResponse] = await Promise.all([
          fetch('/data/summary.csv'),
          fetch('/data/raw.csv'),
        ])

        if (!summaryResponse.ok || !rawResponse.ok) {
          throw new Error('数据文件加载失败')
        }

        const [summaryText, rawText] = await Promise.all([
          summaryResponse.text(),
          rawResponse.text(),
        ])

        await new Promise((resolve) => setTimeout(resolve, 550))

        if (!alive) return

        setState({
          loading: false,
          error: '',
          data: buildDashboardData(summaryText, rawText),
        })
      } catch (_error) {
        if (!alive) return
        setState({
          loading: false,
          error: '',
          data: fallbackDashboardData,
        })
      }
    }

    load()
    return () => {
      alive = false
    }
  }, [])

  return state
}
