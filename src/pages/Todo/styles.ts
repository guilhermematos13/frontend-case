import styled from 'styled-components'
export const ToDoWrapperStyled = styled.main`
  .todo__wrapper {
    max-width: 46.5rem;
    margin: 1.25rem auto 0;
  }

  .todo__list {
    width: 100%;
    list-style: none;
    border-radius: ${({ theme }) => theme.size.xxxs};
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    background-color: rgba(0, 0, 0, 0.01);
  }

  .todo__list > li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  .todo__list > li {
    display: flex;
    flex-wrap: wrap;
    padding: ${({ theme }) => theme.size.sm};
  }

  .todo__list > li > span {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: ${({ theme }) => theme.size.sm};
    padding-right: ${({ theme }) => theme.size.xxs};
  }

  .todo__content {
    flex: 1;
    text-align: left;
  }
`
