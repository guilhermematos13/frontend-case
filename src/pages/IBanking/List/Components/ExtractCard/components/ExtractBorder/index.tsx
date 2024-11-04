import styled from "styled-components"

const ExtractBorderStyled = styled.div`
	margin-left: 32px;
	background-color: ${({ theme }) => theme.colors.lightGray2};
	height: 16px;
	width: 1px;
`

export const ExtractBorder = () => {
	return <ExtractBorderStyled />
}
