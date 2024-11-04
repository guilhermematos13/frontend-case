import styled from "styled-components"

const ExtractBorderStyled = styled.div`
	margin-left: ${({ theme }) => theme.size.lg};
	background-color: ${({ theme }) => theme.colors.lightGray2};
	height: ${({ theme }) => theme.size.sm};
	width: 1px;
`

export const ExtractBorder = () => {
	return <ExtractBorderStyled />
}
