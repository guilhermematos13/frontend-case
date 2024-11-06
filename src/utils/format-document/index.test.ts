import { formatDocument } from "."

describe("formatDocument", () => {
	it("should format a valid 11-digit CPF", () => {
		const value = "12345678901"
		const expectedOutput = "123.456.789-01"
		const result = formatDocument(value)
		expect(result).toBe(expectedOutput)
	})

	it("should return the value as-is if already formatted", () => {
		const value = "123.456.789-01"
		const result = formatDocument(value)
		expect(result).toBe(value)
	})

	it("should return the value as-is if it has less than 11 digits", () => {
		const value = "12345678"
		const result = formatDocument(value)
		expect(result).toBe(value)
	})

	it("should return the value as-is if it has more than 11 digits", () => {
		const value = "123456789012"
		const result = formatDocument(value)
		expect(result).toBe(value)
	})

	it("should return the value as-is if it contains non-numeric characters", () => {
		const value = "abc123xyz"
		const result = formatDocument(value)
		expect(result).toBe(value)
	})
})
