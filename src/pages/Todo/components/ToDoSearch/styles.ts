import styled from "styled-components"
import { ButtonIconStyledProps } from "./types"

export const FormStyled = styled.form`
	display: flex;
	margin-bottom: ${({ theme }) => theme.size.xxs};
`

export const InputContainerStyled = styled.div`
	flex: 1;
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	border-radius: ${({ theme }) => theme.size.xxxs} 0 0
		${({ theme }) => theme.size.xxxs};
	display: flex;
`

export const ButtonIconStyled = styled.button<ButtonIconStyledProps>`
	padding: ${({ theme }) => theme.size.xxs};
	background-color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};

	svg {
		color: ${({ theme }) => theme.colors.colorMain};
		&:hover {
			color: ${({ theme }) => theme.colors.colorDarkMain};
			transition: 0.2s;
		}
	}
`

export const InputFormStyled = styled.input`
	font-size: ${({ theme }) => theme.size.sm};
	width: 100%;
	padding: ${({ theme }) => theme.size.sm};
	border-radius: ${({ theme }) => theme.size.xxxs} 0 0
		${({ theme }) => theme.size.xxxs};
`

export const ButtonSubmitStyled = styled.button`
	padding: ${({ theme }) => theme.size.sm};
	font-size: ${({ theme }) => theme.size.xs};
	font-weight: 700;
	text-transform: uppercase;
	border-radius: 0 ${({ theme }) => theme.size.xxs}
		${({ theme }) => theme.size.xxs} 0;
	background-color: ${({ theme }) => theme.colors.lighterGray};
	color: ${({ theme }) => theme.colors.colorMain};
	border: 1px solid ${({ theme }) => theme.colors.colorMain};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.colorMain};
		border: 1px solid transparent;
		color: ${({ theme }) => theme.colors.lighterGray};
		transition: 0.5s;
	}
`
