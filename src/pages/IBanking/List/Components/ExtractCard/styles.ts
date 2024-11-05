import styled from "styled-components"
import { TypePropsStyled } from "./types"

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${({ theme }) => theme.size["2xl"]};
`

export const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: ${({ theme }) => theme.size.xxs};
`

export const ParagraphDay = styled.strong`
	font-size: ${({ theme }) => theme.size.xs};
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.darkGray};
`

export const ParagraphBalance = styled.p`
	font-size: ${({ theme }) => theme.size.xs};
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.darkGray};
`

export const ContentContainer = styled.div`
	padding: ${({ theme }) => theme.size.lg} ${({ theme }) => theme.size.sm};
	border: 1px solid ${({ theme }) => theme.colors.lightGray2};
	border-radius: ${({ theme }) => theme.size.sm};
	display: flex;
	gap: ${({ theme }) => theme.size.md};
	flex-direction: column;
`

export const ItemContentContainer = styled.div`
	display: grid;
	grid-template-columns: 30% 30% 20% 20%;
	justify-content: space-between;

	@media (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.size.xs};
	}
`

export const TitleContainer = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.size.sm};
`

export const IconTitleStyled = styled.img<TypePropsStyled>`
	width: 1.25rem;
	height: 1.25rem;
	color: ${({ theme, $type }) =>
		$type === "CREDIT" ? theme.colors.darkBlue : theme.colors.darkGray};
`

export const TitleParagraph = styled.p<TypePropsStyled>`
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme, $type }) =>
		$type === "CREDIT" ? theme.colors.darkBlue : theme.colors.darkGray};
	font-size: ${({ theme }) => theme.size.sm};
`

export const BlackParagraph = styled.p`
	font-size: ${({ theme }) => theme.size.sm};
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.gray};
`

export const BalanceParagraph = styled.p<TypePropsStyled>`
	font-size: ${({ theme }) => theme.size.sm};
	text-align: end;
	font-family: "Nunito Sans", sans-serif;
	font-weight: bolder;
	color: ${({ theme, $type }) =>
		$type === "CREDIT" ? theme.colors.darkBlue : theme.colors.darkGray};
`
