import styled from 'styled-components'
export const ToDoWrapperStyled = styled.main`
  .todo__wrapper {
    max-width: 750px;
    margin: 20px auto 0;
  }

  .todo__list {
    width: 100%;
    list-style: none;
    border-radius: 5px;
    border: 1px solid var(--color-light-gray);
    background-color: rgba(0, 0, 0, 0.01);
  }

  .todo__list > span {
    display: block;
    font-size: 1.6em;
    padding: 15px;
    color: var(--color-gray);
  }

  .todo__list > li:not(:last-child) {
    border-bottom: 1px solid var(--color-light-gray);
  }

  .todo__list > li {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  }

  .todo__list > li > span {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2em;
    line-height: 1em;
    padding-right: 10px;
  }

  .todo__content {
    flex: 1;
    text-align: left;
  }

  .todo__actions button {
    display: inline-block;
    font-size: 1.1em;
    padding: 7px;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    text-transform: uppercase;
    color: var(--color-main);
    border: 1px solid var(--color-main);
    background-color: transparent;
  }
`

export const ToDoListStyled = styled.ul`
  width: 100%;
  list-style: none;
  border-radius: 5px;
  border: 1px solid var(--color-light-gray);
  background-color: rgba(0, 0, 0, 0.01);
`
