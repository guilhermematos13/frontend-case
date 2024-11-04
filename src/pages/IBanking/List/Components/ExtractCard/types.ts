import { ItemsType } from "../../../../../api/List/types"

export type ExtractCardProps = {
	item: ItemsType
	date: string
	balanceDay: number
}

export type TypePropsStyled = {
	$type: "DEBIT" | "CREDIT"
}
