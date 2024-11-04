import { api } from "../axios"
import { ROUTES } from "../constants"
import { IListRequest, IListResponse } from "./types"

export const requestList = async ({
	token,
}: IListRequest): Promise<IListResponse> => {
	const response = await api.get<IListResponse>(ROUTES.LIST, {
		headers: { token: `Bearer ${token}` },
	})

	return response.data
}
