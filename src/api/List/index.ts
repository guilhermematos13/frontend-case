import { api } from '@api/axios'
import { IListRequest, IListResponse } from './types'
import { ROUTES } from '@api/constants'

export const requestList = async ({
  token,
}: IListRequest): Promise<IListResponse> => {
  const response = await api.get<IListResponse>(ROUTES.LIST, {
    headers: { token: `Bearer ${token}` },
  })

  return response.data
}
