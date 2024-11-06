import { screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { render } from "@testing-library/react"
import { defaultTheme } from "@styles/themes/defaultTheme"
import { Loading } from "."

describe("Loading Component", () => {
	const renderWithTheme = (ui: React.ReactNode) => {
		return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>)
	}

	it("should render the loading spinner and container", () => {
		renderWithTheme(<Loading />)
		expect(screen.getByTestId("loading-container")).toBeInTheDocument()
		const spinner = screen.getByTestId("loading-spinner")
		expect(spinner).toBeInTheDocument()
	})

	it("should have the correct styles applied to the spinner", () => {
		renderWithTheme(<Loading />)

		const spinner = screen.getByTestId("loading-spinner")
		expect(spinner).toHaveStyle("width: 1.5rem")
		expect(spinner).toHaveStyle("height: 1.5rem")
		expect(spinner).toHaveStyle("border: 2px solid #dfdfdf")
		expect(spinner).toHaveStyle("border-top: 2px solid #d4265a")
	})

	it("should center the loading spinner in the container", () => {
		renderWithTheme(<Loading />)

		const container = screen.getByTestId("loading-container")
		expect(container).toHaveStyle("display: flex")
		expect(container).toHaveStyle("align-items: center")
		expect(container).toHaveStyle("justify-content: center")
	})
})
