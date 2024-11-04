import { ExtractBorder } from "./components/ExtractBorder"
import {
	BalanceParagraph,
	BlackParagraph,
	ContentContainer,
	HeaderContainer,
	IconTitleStyled,
	ItemContentContainer,
	MainContainer,
	ParagraphBalance,
	ParagraphDay,
	TitleContainer,
	TitleParagraph,
} from "./styles"
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
		<MainContainer>
			<HeaderContainer>
				<ParagraphDay>{formatDateWithCapitalizedMonth(date)}</ParagraphDay>
				<ParagraphBalance>
					saldo do dia<strong> {formatCurrency(balanceDay)}</strong>
				</ParagraphBalance>
			</HeaderContainer>
			<ExtractBorder />
			<ContentContainer>
				{items.map((item) => {
					const isCreditEntry = item.entry === "CREDIT"
					return (
						<ItemContentContainer key={item.id}>
							<TitleContainer>
								<IconTitleStyled
									$type={item.entry}
									alt={isCreditEntry ? "Icone de crédito" : "Icone de Débito"}
									src={isCreditEntry ? creditIcon : debitIcon}
								/>
								<TitleParagraph $type={item.entry}>{item.name}</TitleParagraph>
							</TitleContainer>
							<BlackParagraph>{item.description}</BlackParagraph>
							<BlackParagraph>{formatISODate(item.dateEvent)}</BlackParagraph>
							<BalanceParagraph $type={item.entry}>
								<span>{isCreditEntry ? "+" : "-"} </span>
								{formatCurrency(item.amount)}
							</BalanceParagraph>
						</ItemContentContainer>
					)
				})}
			</ContentContainer>
			<ExtractBorder />
		</MainContainer>
	)
}
