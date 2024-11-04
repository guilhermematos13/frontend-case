import { api } from "../axios"
import { ROUTES } from "../constants"
import { IAuthRequest, IAuthResponse } from "./types"

export const requestAuth = async ({
	cpf,
	password,
}: IAuthRequest): Promise<IAuthResponse> => {
	const response = await api.post<IAuthResponse>(
		ROUTES.AUTH,
		{
			cpf,
			password,
		},
		{
			headers: { "Content-Type": "application/json" },
		},
	)

	return response.data
}
