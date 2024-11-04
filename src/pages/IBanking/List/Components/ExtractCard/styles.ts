import styled from "styled-components"
import { TypePropsStyled } from "./types"

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
`

export const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 8px;
`

export const ParagraphDay = styled.strong`
	font-size: 0.75rem;
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.darkGray};
`

export const ParagraphBalance = styled.p`
	font-size: 0.75rem;
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.darkGray};
`

export const ContentContainer = styled.div`
	display: grid;
	grid-template-columns: 30% 30% 20% 20%;
	justify-content: space-between;
	padding: 32px 16px;
	border: 1px solid ${({ theme }) => theme.colors.lightGray2};
	border-radius: 16px;
`

export const TitleContainer = styled.div`
	display: flex;
	gap: 16px;
`

export const IconTitleStyled = styled.img<TypePropsStyled>`
	width: 20px;
	height: 20px;
	color: ${({ theme, $type }) =>
		$type === "CREDIT" ? theme.colors.darkBlue : theme.colors.darkGray};
`

export const TitleParagraph = styled.p<TypePropsStyled>`
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme, $type }) =>
		$type === "CREDIT" ? theme.colors.darkBlue : theme.colors.darkGray};
	font-size: 1rem;
`

export const BlackParagraph = styled.p`
	font-size: 1rem;
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.gray};
`

export const BalanceParagraph = styled.p<TypePropsStyled>`
	font-size: 1rem;
	text-align: end;
	font-family: "Nunito Sans", sans-serif;
	font-weight: bolder;
	color: ${({ theme, $type }) =>
		$type === "CREDIT" ? theme.colors.darkBlue : theme.colors.darkGray};
`
