import { ItemsType } from '@api/List/types'

export type ExtractCardProps = {
  items: ItemsType[]
  date: string
  balanceDay: number
}

export type TypePropsStyled = {
  $type: 'DEBIT' | 'CREDIT'
}
