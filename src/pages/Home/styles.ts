import styled from "styled-components"

export const MainContainerStyled = styled.main`
	width: 100%;
	max-width: calc(100% - 50px);
	min-width: 320px;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 0 25px;
	font-size: 10px;
	text-align: center;
	font-family: "Roboto", sans-serif;
	margin: 0 auto;
`

export const ImageStyled = styled.img`
	width: 36px;
	margin-bottom: 25px;
`

export const TitleStyled = styled.h1`
	font-size: 5em;
	font-weight: 700;
	line-height: 1.4em;
`

export const SubtitleStyled = styled.h1`
	font-size: 2.6em;
	line-height: 1em;
	font-weight: 400;
	color: ${({ theme }) => theme.colorMain};
`

export const ParagraphStyled = styled.p`
	width: 100%;
	max-width: 550px;
	display: block;
	font-weight: 300;
	text-align: center;
	font-size: 1.8em;
	line-height: 1.4em;
	margin: 15px auto;
	color: ${({ theme }) => theme.gray};
`

export const ParagraphDisclaimerStyled = styled.p`
	padding: 15px;
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.02);
	border: 1px solid ${({ theme }) => theme.lightGray};
`

export const ContainerButtonsStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-top: 16px;
	align-items: center;
`

export const AnchorButtonStyled = styled.a`
	display: inline-block;
	padding: 10px;
	font-size: 1.4em;
	text-decoration: none;
	border-radius: 5px;
	min-width: 200px;
	max-width: 300px;
	text-align: center;
	color: ${({ theme }) => theme.colorMain};
	border: 1px solid ${({ theme }) => theme.colorMain};
`
