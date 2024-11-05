import styled from 'styled-components'

export const MainContainerList = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3.75rem 5.75rem 3.75rem 19.75rem;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.sm};
  justify-content: space-between;
`
