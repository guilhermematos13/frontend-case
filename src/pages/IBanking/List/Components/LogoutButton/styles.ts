import styled from 'styled-components'

export const LogoutButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-contennt: center;
  gap: ${({ theme }) => theme.size.xxxs};
  padding: ${({ theme }) => theme.size.xxs} 0.625rem;
  background-color: ${({ theme }) => theme.colors.colorMain};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.size.lg};
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.colorMain};
    color: ${({ theme }) => theme.colors.colorMain};
    transition: 0.5s;

    svg {
      color: ${({ theme }) => theme.colors.colorMain};
      transition: 0.5s;
    }
  }
`
