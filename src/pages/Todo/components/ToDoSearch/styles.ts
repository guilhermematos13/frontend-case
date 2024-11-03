import styled from 'styled-components'
import { ButtonIconStyledProps } from './types'

export const FormStyled = styled.form`
  display: flex;
  margin-bottom: ${({ theme }) => theme.size.xxs};
`

export const InputContainerStyled = styled.div`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px 0 0 5px;
  display: flex;
`

export const ButtonIconStyled = styled.button<ButtonIconStyledProps>`
  padding: ${({ theme }) => theme.size.xxs};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};

  svg {
    color: ${({ theme }) => theme.colors.colorMain};
    &:hover {
      color: ${({ theme }) => theme.colors.colorDarkMain};
      transition: 0.2s;
    }
  }
`

export const InputFormStyled = styled.input`
  font-size: 1.6em;
  width: 100%;
  padding: ${({ theme }) => theme.size.sm};
  border-radius: 5px 0 0 5px;
`

export const ButtonSubmitStyled = styled.button`
  padding: ${({ theme }) => theme.size.sm};
  font-size: 1.1em;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0 5px 5px 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    transition: 0.5s;
  }
`
