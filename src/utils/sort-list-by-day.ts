import { IListResponse } from "../api/List/types"

export const sortResultsByDate = (
	data?: IListResponse,
): IListResponse["results"] => {
	if (data) {
		return data.results.sort((a, b) => {
			const dateA = new Date(a.date)
			const dateB = new Date(b.date)
			return dateB.getTime() - dateA.getTime()
		})
	}
	return []
}
