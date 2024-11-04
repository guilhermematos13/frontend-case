import styled from "styled-components"

export const LoginButtonStyled = styled.button`
	padding: 20px 24px;
	font-size: 1rem;
	font-family: "Nunito Sans", sans-serif;
	background-color: ${({ theme }) => theme.colors.white};
	text-decoration: none;
	border-radius: ${({ theme }) => theme.size.sm};
	color: ${({ theme }) => theme.colors.colorMain};
	border: 1px solid transparent;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.lightGray};
		transition: 0.5s;
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.lightGray};
		cursor: not-allowed;
	}
`
