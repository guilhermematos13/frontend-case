import { formatDateWithCapitalizedMonth, formatISODate } from "."

describe("formatDateWithCapitalizedMonth", () => {
	it("should format the date with capitalized month", () => {
		const date = "2024-11-05"
		const expectedOutput = "05 de Novembro"
		const result = formatDateWithCapitalizedMonth(date)
		expect(result).toBe(expectedOutput)
	})

	it("should format the date correctly with a custom locale", () => {
		const date = "2024-12-10"
		const result = formatDateWithCapitalizedMonth(date)
		expect(result).toContain("Dezembro")
	})
})

describe("formatISODate", () => {
	it("should format ISO date with capitalized month and time", () => {
		const isoDate = "2024-11-05T15:30:00Z"
		const expectedOutput = "05 Nov 2024 - 15:30"
		const result = formatISODate(isoDate)
		expect(result).toBe(expectedOutput)
	})

	it("should handle a date with a different time and verify capitalization", () => {
		const isoDate = "2024-06-15T08:45:00Z"
		const result = formatISODate(isoDate)
		expect(result).toContain("Jun")
	})
})
