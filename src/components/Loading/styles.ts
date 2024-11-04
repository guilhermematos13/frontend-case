import styled, { keyframes } from "styled-components"

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const LoadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const LoadingSpinner = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.lightGray};
	border-top: 2px solid ${({ theme }) => theme.colors.colorDarkMain};
	border-radius: 50%;
	width: ${({ theme }) => theme.size.md};
	height: ${({ theme }) => theme.size.md};
	animation: ${spin} 1s linear infinite;
`
