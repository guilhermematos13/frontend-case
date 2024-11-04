import styled from "styled-components"
import { FilterButtonStyledProps } from "./types"

export const FilterButtonContainerStyled = styled.div`
	display: flex;
	gap: 16px;
`

export const FilterButton = styled.button<FilterButtonStyledProps>`
	padding: 4px 10px;
	background-color: ${({ $selected, theme }) =>
		$selected ? theme.colors.darkGray : theme.colors.lighterGray};
	color: ${({ $selected, theme }) =>
		$selected ? theme.colors.lighterGray : theme.colors.darkGray};
	border-radius: 32px;
	font-family: "Nunito Sans", sans-serif;
	cursor: pointer;
	transition:
		background-color 0.3s,
		color 0.3s;
`
