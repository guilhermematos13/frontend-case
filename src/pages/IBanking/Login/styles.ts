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
	padding: 6.063rem 5.438rem 5.438rem;
	width: 42.125rem;
	border-radius: 0 0 ${({ theme }) => theme.size.sm}
		${({ theme }) => theme.size.sm};
	box-shadow: 0px 4px 16px 0px #20202014;

	@media (max-width: 768px) {
		padding: 2rem 1rem;
		border-radius: 0;
	}
`

export const ContentContainerStyled = styled.div`
	display: flex;
	gap: 3rem;
	flex-direction: column;
	margin-top: 5.25rem;
`

export const FormContainerStyled = styled.form`
	display: flex;
	gap: 3rem;
	flex-direction: column;
`

export const InputContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.size.md};
`

export const ButtonContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
`
