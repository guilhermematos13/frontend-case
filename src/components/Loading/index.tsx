import { LoadingContainer, LoadingSpinner } from "./styles"

export const Loading = () => (
	<LoadingContainer data-testid="loading-container">
		<LoadingSpinner data-testid="loading-spinner" />
	</LoadingContainer>
)
