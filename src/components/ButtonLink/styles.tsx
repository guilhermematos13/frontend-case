import styled from "styled-components"

export const ButtonLinkStyled = styled.a`
	display: inline-block;
	padding: ${({ theme }) => theme.size.sm};
	font-size: ${({ theme }) => theme.size.sm};
	text-decoration: none;
	border-radius: ${({ theme }) => theme.size.xxxs};
	min-width: 12.5rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.colorMain};
	border: 1px solid ${({ theme }) => theme.colors.colorMain};

	&:hover {
		background-color: ${({ theme }) => theme.colors.colorMain};
		color: ${({ theme }) => theme.colors.white};
		transition: 0.5s;
	}
`
