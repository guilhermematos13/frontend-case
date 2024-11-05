import { Login } from './Login'
import { List } from './List'
import { EnumIBankingTypesName, IBankingProps } from './types'

export function IBanking({ type }: IBankingProps) {
  const ComponentMap = {
    [EnumIBankingTypesName.LOGIN]: <Login />,
    [EnumIBankingTypesName.LIST]: <List />,
  }

  return ComponentMap[type]
}
