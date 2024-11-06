interface IListRequest {
	token: string
}

interface IListResponse {
	results: Array<IResults>
	itemsTotal: number
}

interface IResults {
	items: Array<ItemsType>
	date: string
}

interface ItemsType {
	id: string
	description: string
	label: string
	entry: "DEBIT" | "CREDIT"
	amount: number
	name: string
	dateEvent: string
	status: string
}

export type { IListResponse, IListRequest, ItemsType }
