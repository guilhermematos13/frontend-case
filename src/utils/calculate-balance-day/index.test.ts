import { IListResponse } from "@api/List/types"
import { calculateDailyBalance } from "."

const mockTransactions: IListResponse["results"] = [
	{
		date: "2024-11-03",
		items: [
			{
				id: "abc123def456ghi789",
				description: "Compra de produtos eletrônicos",
				label: "Compra aprovada",
				entry: "DEBIT",
				amount: 150000,
				name: "João da Silva",
				dateEvent: "2024-02-01T08:15:17Z",
				status: "COMPLETED",
			},
			{
				id: "abc123def456ghi779",
				description: "Compra de produtos eletrônicos",
				label: "Compra aprovada",
				entry: "DEBIT",
				amount: 150000,
				name: "João da Silva",
				dateEvent: "2024-02-01T08:15:17Z",
				status: "COMPLETED",
			},
		],
	},
	{
		date: "2024-11-06",
		items: [
			{
				id: "abc123def456ghi789",
				description: "Compra de produtos eletrônicos",
				label: "Compra aprovada",
				entry: "DEBIT",
				amount: 150000,
				name: "João da Silva",
				dateEvent: "2024-02-01T08:15:17Z",
				status: "COMPLETED",
			},
		],
	},
	{
		date: "2024-11-05",
		items: [
			{
				id: "abc123def456ghi789",
				description: "Compra de produtos eletrônicos",
				label: "Compra aprovada",
				entry: "DEBIT",
				amount: 65421,
				name: "João da Silva",
				dateEvent: "2024-02-01T08:15:17Z",
				status: "COMPLETED",
			},
			{
				id: "abc123def456ghi779",
				description: "Compra de produtos eletrônicos",
				label: "Compra aprovada",
				entry: "CREDIT",
				amount: 123,
				name: "João da Silva",
				dateEvent: "2024-02-01T08:15:17Z",
				status: "COMPLETED",
			},
		],
	},
]

describe("calculateDailyBalance", () => {
	it("should calculate the correct balance for a target date with mixed credits and debits", () => {
		const targetDate = "2024-11-05"
		const expectedBalance = -65298
		const result = calculateDailyBalance(mockTransactions, targetDate)
		expect(result).toBe(expectedBalance)
	})

	it("should return 0 if there are no transactions on the target date", () => {
		const targetDate = "2024-11-07"
		const expectedBalance = 0
		const result = calculateDailyBalance(mockTransactions, targetDate)
		expect(result).toBe(expectedBalance)
	})

	it("should calculate the balance correctly for another date with only debits", () => {
		const targetDate = "2024-11-06"
		const expectedBalance = -150000
		const result = calculateDailyBalance(mockTransactions, targetDate)
		expect(result).toBe(expectedBalance)
	})
})
