import dates from 'src/app/events/helpers/dates'

describe('events/helpers/dates', () => {
  describe('eventHasTime', () => {
    it('should know if the date is not midnight', () => {
      // Date remaining in UTC with no time set
      expect(dates.eventHasTime('2017-01-01T00:00:00Z', 'UTC')).toBe(false)

      // Date converted to Pacific/Auckland would be midnight so no time set
      expect(dates.eventHasTime('2017-01-01T11:00:00Z', 'Pacific/Auckland')).toBe(false)

      // Date converted to Pacific/Auckland would NOT be midnight so should have time set
      expect(dates.eventHasTime('2017-01-01T12:00:00Z', 'Pacific/Auckland')).toBe(true)
    })
  })

  describe('formatEventDateForDisplay', () => {
    it('should format date correctly', () => {
      // Same start and end dates (with no tz) - time zone agnostic
      expect(dates.formatEventDateForDisplay('2017-01-01T00:00:00Z', '2017-01-01T00:00:00Z', null)).toBe('Sun, 1 Jan 2017')

      // Same day but different times specified - time zone agnostic
      expect(dates.formatEventDateForDisplay('2019-12-26T00:00:00Z', '2019-12-26T23:59:59Z', null)).toBe('Thu, 26 Dec 2019')

      // Different start and end dates (with no tz) - time zone agnostic
      expect(dates.formatEventDateForDisplay('2017-01-01T00:00:00Z', '2017-01-05T00:00:00Z', null)).toBe('Sun, 1 Jan 2017 - Thu, 5 Jan 2017')

      // Same start and dates/times with tz
      expect(dates.formatEventDateForDisplay('2017-01-01T06:00:00Z', '2017-01-01T06:00:00Z', 'Pacific/Auckland')).toBe('Sun, 1 Jan 2017 7:00 PM +1300')

      // Different start and dates/times with tz
      expect(dates.formatEventDateForDisplay('2017-01-01T06:00:00Z', '2017-01-05T06:00:00Z', 'Pacific/Auckland')).toBe('Sun, 1 Jan 2017 7:00 PM - Thu, 5 Jan 2017 7:00 PM +1300')

      // Ongoing event
      expect(dates.formatEventDateForDisplay('2017-01-01T06:00:00Z', null, 'Pacific/Auckland')).toBe('Sun, 1 Jan 2017 7:00 PM +1300 - Ongoing')
    })
  })

  describe('getDate', () => {
    it('should format date with duration', () => {
      var event = {
        start: '2017-01-01T00:00:00Z',
        end: '2017-01-01T00:00:00Z',
        timezone: null,
        duration: 0
      }

      // Time zone agnostic, 1 day
      expect(dates.getDate(event)).toBe('Sun, 1 Jan 2017 (1 day)')

      // Different start and end dates (with no tz) - time zone agnostic
      event.start = '2017-01-01T00:00:00Z'
      event.end = '2017-01-05T00:00:00Z'
      event.timezone = null
      event.duration = 345600
      expect(dates.getDate(event)).toBe('Sun, 1 Jan 2017 - Thu, 5 Jan 2017 (5 days)')

      // Same start and dates/times with tz - don't show duration as not tz agnostic
      event.start = '2017-01-01T06:00:00Z'
      event.end = '2017-01-01T06:00:00Z'
      event.timezone = 'Pacific/Auckland'
      event.duration = 0
      expect(dates.getDate(event)).toBe('Sun, 1 Jan 2017 7:00 PM +1300')

      // Different start and dates/times with tz
      event.start = '2017-01-01T06:00:00Z'
      event.end = '2017-01-05T06:00:00Z'
      event.timezone = 'Pacific/Auckland'
      event.duration = 345600
      expect(dates.getDate(event)).toBe('Sun, 1 Jan 2017 7:00 PM - Thu, 5 Jan 2017 7:00 PM +1300 (5 days)')
    })
  })

  describe('getQuickViewDate', () => {
    it('should format date correctly', () => {
      expect(dates.getQuickViewDate('2017-01-01T00:00:00Z', '2017-01-01T00:00:00Z', null, 'Pacific/Auckland')).toBe('Sun, 1 Jan 2017 (Pacific/Auckland)')
    })
  })
})
