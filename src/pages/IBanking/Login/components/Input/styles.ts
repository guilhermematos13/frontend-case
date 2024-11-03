import styled from "styled-components"

export const InputContainerStyled = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.colors.lighterGray};
	border-radius: ${({ theme }) => theme.size.sm};
	padding: 20px 16px;
`

export const InputStyled = styled.input`
	flex: 1;
	font-family: "Nunito Sans", sans-serif;
	background-color: transparent;
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.gray};
`

export const ActionButtonStyled = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.colorMain};
	cursor: pointer;
`

export const ErrorMessageStyled = styled.span`
	font-size: 0.75rem;
	margin-left: 16px;
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.lighterGray};
`
