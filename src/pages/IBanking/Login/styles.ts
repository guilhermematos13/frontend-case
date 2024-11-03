import styled from "styled-components"

export const MainContainerStyled = styled.main`
	display: flex;
	justify-content: center;
`

export const TitleStyled = styled.h1`
	font-family: "Nunito Sans", sans-serif;
	color: ${({ theme }) => theme.colors.white};
`

export const LoginContainerStyled = styled.div`
	background-color: ${({ theme }) => theme.colors.colorDarkMain};
	padding: 97px 87px 87px 87px;
	width: 674px;
	border-radius: 0 0 16px 16px;
`

export const ContentContainerStyled = styled.div`
	display: flex;
	gap: 3rem;
	flex-direction: column;
	margin-top: 5.25rem;
`

export const InputContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

export const ButtonContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
`
