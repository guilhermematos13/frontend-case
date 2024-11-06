import { formatCurrency } from "."

describe("formatCurrency", () => {
	it("should format a positive value as Brazilian Real currency", () => {
		const value = 1234.56
		const expectedOutput = "R$ 1.234,56"
		const result = formatCurrency(value)
		expect(result).toBe(expectedOutput)
	})

	it("should format a negative value as Brazilian Real currency", () => {
		const value = -1234.56
		const expectedOutput = "-R$ 1.234,56"
		const result = formatCurrency(value)
		expect(result).toBe(expectedOutput)
	})

	it("should format zero as Brazilian Real currency", () => {
		const value = 0
		const expectedOutput = "R$ 0,00"
		const result = formatCurrency(value)
		expect(result).toBe(expectedOutput)
	})

	it("should round values with more than two decimal places", () => {
		const value = 1234.5678
		const expectedOutput = "R$ 1.234,57"
		const result = formatCurrency(value)
		expect(result).toBe(expectedOutput)
	})

	it("should format a large number correctly", () => {
		const value = 1000000
		const expectedOutput = "R$ 1.000.000,00"
		const result = formatCurrency(value)
		expect(result).toBe(expectedOutput)
	})
})
