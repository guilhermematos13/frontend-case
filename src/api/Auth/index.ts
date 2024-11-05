import { api } from "@api/axios"
import { IAuthRequest, IAuthResponse } from "./types"
import { ROUTES } from "@api/constants"

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
