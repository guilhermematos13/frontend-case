import { LoadingContainer, LoadingSpinner } from "./styles"

export const Loading = () => {
	return (
		<LoadingContainer data-testid="loading-container">
			<LoadingSpinner data-testid="loading-spinner" />
		</LoadingContainer>
	)
}
