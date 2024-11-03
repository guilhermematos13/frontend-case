import { api } from "../axios"
import { ROUTES } from "../constants"
import { AuthRequest, AuthResponse } from "./types"

export const requestAuth = async ({
	cpf,
	password,
}: AuthRequest): Promise<AuthResponse> => {
	const response = await api.post<AuthResponse>(
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
