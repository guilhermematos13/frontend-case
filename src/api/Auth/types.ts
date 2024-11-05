interface IAuthResponse {
  token: string
}

interface IAuthRequest {
  cpf: string
  password: string
}

export type { IAuthRequest, IAuthResponse }
