import { describe, expect, it, test } from 'vitest'
import { PARTIAL_DATE, YEAR_MONTH, YEAR_MONTH_RANGE_OR_PRESENT } from './date-expressions'

describe('Partial date expression', () => {
  it('Should accept a full date', () => {
    expect(PARTIAL_DATE.test('2020-03-12')).toBe(true)
  })

  it('Should accept a year and month date', () => {
    expect(PARTIAL_DATE.test('2020-03')).toBe(true)
  })

  it('Should accept only a year', () => {
    expect(PARTIAL_DATE.test('2020')).toBe(true)
  })

  it('Should not accept invalid dates', () => {
    expect(PARTIAL_DATE.test('2020-03-44')).toBe(false)
    expect(PARTIAL_DATE.test('2020-13-12')).toBe(false)
  })
})

describe('Year-month expression', () => {
  it('Should accept a valid year-month expression', () => {
    expect(YEAR_MONTH.test('2023-01')).toBe(true)
    expect(YEAR_MONTH.test('2023-12')).toBe(true)
  })

  it('Should not accept only a year', () => {
    expect(YEAR_MONTH.test('2023')).toBe(false)
  })

  it('Should not accept an invalid month', () => {
    expect(YEAR_MONTH.test('2023-00')).toBe(false)
    expect(YEAR_MONTH.test('2023-13')).toBe(false)
    expect(YEAR_MONTH.test('2023-9')).toBe(false)
  })
})

describe('Year-month range or present', () => {
  it('Should accept a year-month range', () => {
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,2018-12')).toBe(true)
  })

  it('Should accept a year-month start and a "present" end value', () => {
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,present')).toBe(true)
  })

  it('Should not accept a "present" start value', () => {
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('present,2018-12')).toBe(false)
  })

  it('Should not accept a missing end value', () => {
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09')).toBe(false)
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,')).toBe(false)
  })

  it('Should not accept a date-like end value different to a strict year-month expression', () => {
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,2023')).toBe(false)
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,2018-12-04')).toBe(false)
  })

  it('Should accept "present" values with spaces and special characters', () => {
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,bis heute')).toBe(true)
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,présent')).toBe(true)
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,現在')).toBe(true)
  })

  it('Should not accept more than two values', () => {
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,2018-12,2020-09')).toBe(false)
    expect(YEAR_MONTH_RANGE_OR_PRESENT.test('2018-09,present,more present')).toBe(false)
  })
})
