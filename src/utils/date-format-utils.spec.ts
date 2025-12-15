import { describe, expect, it } from 'vitest'
import { partialDate, yearMonthRangeOrPresent } from './date-format-utils'

describe('Partial date', () => {
  it('Should format a full date', () => {
    expect(partialDate('2025-03-07', 'en')).toBe('March 7, 2025')
  })

  it('Should format a year-month date', () => {
    expect(partialDate('2025-03', 'en')).toBe('March 2025')
  })

  it('Should return the year when is the only token present', () => {
    expect(partialDate('2025', 'en')).toBe('2025')
  })

  it('Should capitalize formated date besides of the locale', () => {
    expect(partialDate('2025-03', 'es')).toBe('Marzo de 2025')
  })

  it('Should work with different locales', () => {
    expect(partialDate('2025-03-07', 'es-MX')).toBe('7 de marzo de 2025')
    expect(partialDate('2025-03-07', 'fr-FR')).toBe('7 mars 2025')
    expect(partialDate('2025-03-07', 'de-DE')).toBe('7. März 2025')
  })
})

describe('Year-month range or "present"', () => {
  it('Should format a year-month range', () => {
    expect(yearMonthRangeOrPresent('2025-03,2025-04', 'en')).toBe('March - April 2025')
  })

  it('Should format a year-month start and a "present" end value', () => {
    expect(yearMonthRangeOrPresent('2025-03,Present', 'en')).toBe('March 2025 - Present')
  })

  it('Should format and return only the start value when the end value is the same', () => {
    expect(yearMonthRangeOrPresent('2025-03,2025-03', 'en')).toBe('March 2025')
  })

  it('Should not abbreviate when start and end values are in different years ', () => {
    expect(yearMonthRangeOrPresent('2024-03,2025-03', 'en')).toBe('March 2024 - March 2025')
  })

  it('Should work with different locales', () => {
    expect(yearMonthRangeOrPresent('2025-03,2025-04', 'es-MX')).toBe('Marzo - Abril de 2025')
    expect(yearMonthRangeOrPresent('2025-03,Presente', 'es-MX')).toBe('Marzo de 2025 - Presente')
    expect(yearMonthRangeOrPresent('2025-03,2025-03', 'es-MX')).toBe('Marzo de 2025')

    expect(yearMonthRangeOrPresent('2025-03,2025-04', 'fr-FR')).toBe('Mars - Avril 2025')
    expect(yearMonthRangeOrPresent('2025-03,Présent', 'fr-FR')).toBe('Mars 2025 - Présent')
    expect(yearMonthRangeOrPresent('2025-03,2025-03', 'fr-FR')).toBe('Mars 2025')

    expect(yearMonthRangeOrPresent('2025-03,2025-04', 'de-DE')).toBe('März - April 2025')
    expect(yearMonthRangeOrPresent('2025-03,Bis heute', 'de-DE')).toBe('März 2025 - Bis heute')
    expect(yearMonthRangeOrPresent('2025-03,2025-03', 'de-DE')).toBe('März 2025')
  })
})
