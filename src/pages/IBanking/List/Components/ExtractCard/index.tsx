import { ExtractBorder } from "./components/ExtractBorder"
import * as S from "./styles"
import debitIcon from "../../../../../assets/ic_arrow-return.svg"
import creditIcon from "../../../../../assets/ic_arrow-down-in.svg"
import { ExtractCardProps } from "./types"
import { formatCurrency } from "../../../../../utils/format-price"
import {
	formatDateWithCapitalizedMonth,
	formatISODate,
} from "../../../../../utils/format-date"

export const ExtractCard = ({ items, date, balanceDay }: ExtractCardProps) => {
	return (
		<S.MainContainer>
			<S.HeaderContainer>
				<S.ParagraphDay>{formatDateWithCapitalizedMonth(date)}</S.ParagraphDay>
				<S.ParagraphBalance>
					saldo do dia<strong> {formatCurrency(balanceDay)}</strong>
				</S.ParagraphBalance>
			</S.HeaderContainer>
			<ExtractBorder />
			<S.ContentContainer>
				{items.map((item) => {
					const isCreditEntry = item.entry === "CREDIT"
					return (
						<S.ItemContentContainer key={item.id}>
							<S.TitleContainer>
								<S.IconTitleStyled
									$type={item.entry}
									alt={isCreditEntry ? "Icone de crédito" : "Icone de Débito"}
									src={isCreditEntry ? creditIcon : debitIcon}
								/>
								<S.TitleParagraph $type={item.entry}>
									{item.name}
								</S.TitleParagraph>
							</S.TitleContainer>
							<S.BlackParagraph>{item.description}</S.BlackParagraph>
							<S.BlackParagraph>
								{formatISODate(item.dateEvent)}
							</S.BlackParagraph>
							<S.BalanceParagraph $type={item.entry}>
								<span>{isCreditEntry ? "+" : "-"} </span>
								{formatCurrency(item.amount)}
							</S.BalanceParagraph>
						</S.ItemContentContainer>
					)
				})}
			</S.ContentContainer>
			<ExtractBorder />
		</S.MainContainer>
	)
}
