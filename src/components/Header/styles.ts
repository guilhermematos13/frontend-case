import styled from 'styled-components'

export const HeaderContainerStyled = styled.div`
  img {
    width: 2.25rem;
    margin-bottom: ${({ theme }) => theme.size.lg};
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 5rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: ${({ theme }) => theme.size.md};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.colorMain};
  }

  p {
    width: 100%;
    max-width: 34.75rem;
    display: block;
    font-weight: 300;
    text-align: center;
    font-size: 1.125rem;
    line-height: ${({ theme }) => theme.size.md};
    margin: ${({ theme }) => theme.size.sm} auto;
    color: ${({ theme }) => theme.colors.gray};
  }

  p.disclaimer {
    padding: ${({ theme }) => theme.size.sm};
    border-radius: ${({ theme }) => theme.size.xxxs};
    max-width: 28.5rem;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`
