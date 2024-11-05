import styled from 'styled-components'
import { ButtonStyledProps } from './types'

export const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: ${({ theme, $variant }) =>
    $variant === 'normal' ? theme.size.xs : theme.size.xxs};
  font-size: ${({ $variant }) => ($variant === 'normal' ? '1rem' : '0.75rem')};
  background-color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.size.xxxs};
  text-align: center;
  color: ${({ theme }) => theme.colors.colorMain};
  border: 1px solid ${({ theme }) => theme.colors.colorMain};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.colorMain};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.5s;
  }
`
