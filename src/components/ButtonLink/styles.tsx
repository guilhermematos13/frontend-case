import { ButtonLinkStyledProps } from './types'
import styled from 'styled-components'

export const ButtonLinkStyled = styled.a<ButtonLinkStyledProps>`
  ${({ $variant, theme }) =>
    $variant === 'button'
      ? `
	display: inline-block;
	padding: ${theme.size.sm};
	font-size: ${theme.size.sm};
	text-decoration: none;
	border-radius: ${theme.size.xxxs};
	min-width: 12.5rem;
	text-align: center;
	color: ${theme.colors.colorMain};
	border: 1px solid ${theme.colors.colorMain};

	&:hover {
		background-color: ${theme.colors.colorMain};
		color: ${theme.colors.white};
		transition: 0.5s;
	}
	`
      : `
	display: inline-block;
	font-size: ${theme.size.xs};
	text-decoration: none;
	color: ${theme.colors.colorMain};
	position: relative;

	&::after {
		content: '';
		display: block;
		border-bottom: solid 1px ${theme.colors.colorMain};
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
		transform-origin: 0% 50% 
	}

	&:hover::after {
		transform: scaleX(1);
	}

	
`}
`
