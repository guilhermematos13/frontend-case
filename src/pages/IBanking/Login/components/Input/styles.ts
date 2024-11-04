import styled from "styled-components"

export const InputContainerStyled = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.colors.lighterGray};
	border-radius: ${({ theme }) => theme.size.sm};
	padding: 1.25rem ${({ theme }) => theme.size.sm};
`

export const InputStyled = styled.input`
	flex: 1;
	font-family: "Nunito Sans", sans-serif;
	background-color: transparent;
	font-size: ${({ theme }) => theme.size.sm};
	color: ${({ theme }) => theme.colors.gray};
`

export const ActionButtonStyled = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.colorMain};
	cursor: pointer;
`

export const ErrorMessageStyled = styled.span`
	font-size: ${({ theme }) => theme.size.xs};
	margin-left: ${({ theme }) => theme.size.sm};
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.lighterGray};
`
