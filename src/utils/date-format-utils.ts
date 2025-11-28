import { YEAR_MONTH } from '../constants/date-expressions'
import { capitalize } from './string-utils'

function partialToDate(partial: string): Date {
  const [year, month, day] = partial.split('-').map(Number)
  return new Date(year, month ? month - 1 : 0, day ?? 1)
}

export function partialDate(date: string, locale: string): string {
  const [, month, day] = date.split('-').map(Number)
  return capitalize(
    new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: month ? 'long' : undefined,
      day: day ? 'numeric' : undefined,
    }).format(partialToDate(date))
  )
}

export function yearMonthRangeOrPresent(range: string, locale: string): string {
  const [start, end] = range.split(',')

  let startDate = capitalize(
    new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(partialToDate(start))
  )

  if (start == end) return startDate

  if (!YEAR_MONTH.test(end)) return `${startDate} - ${capitalize(end)}`

  if (start.split('-')[0] == start.split('-')[0])
    startDate = capitalize(new Intl.DateTimeFormat(locale, { month: 'long' }).format(partialToDate(start)))

  const endDate = capitalize(
    new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(partialToDate(end))
  )

  return `${startDate} - ${endDate}`
}
