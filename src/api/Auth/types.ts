interface AuthResponse {
	token: string
}

interface AuthRequest {
	cpf: string
	password: string
}

export type { AuthRequest, AuthResponse }
