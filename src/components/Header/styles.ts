import styled from "styled-components"

export const HeaderContainerStyled = styled.div`
	img {
		width: 36px;
		margin-bottom: 25px;
	}
	h1 {
		font-size: 5em;
		font-weight: 700;
		line-height: 1.4em;
	}
	h2 {
		font-size: 2.6em;
		line-height: 1em;
		font-weight: 400;
		color: var(--color-main);
	}
	p {
		width: 100%;
		max-width: 550px;
		display: block;
		font-weight: 300;
		text-align: center;
		font-size: 1.8em;
		line-height: 1.4em;
		margin: 15px auto;
		color: var(--color-gray);
	}
	p.disclaimer {
		padding: 15px;
		border-radius: 5px;
		max-width: 450px;
		background-color: rgba(0, 0, 0, 0.02);
		border: 1px solid var(--color-light-gray);
	}
`
