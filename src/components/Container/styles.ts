import styled from "styled-components"

export const ContainerStyled = styled.div`
	--color-main: #fe3e6d;
	--color-dark-main: #d4265a;
	--color-white: #ffffff;
	--color-gray: #6b7076;
	--color-light-gray: #dfdfdf;
	--color-lighter-gray: #f0f4f8;
	--color-error: #ee3636;
	--color-success: #04aa6d;

	width: 100%;
	min-width: 20rem;
	min-height: 100vh;
	padding: 3.125rem 0 1.625rem;
	font-size: 0.625rem;
	text-align: center;
	font-family: "Roboto", sans-serif;
	margin: 0 auto;

	.buttons {
		list-style: none;
		margin-top: 1.25rem;
		display: flex;
		gap: ${({ theme }) => theme.size.xxs};
		justify-content: center;
	}
	.buttons li:first-child {
		margin-bottom: ${({ theme }) => theme.size.xxs};
	}
`
