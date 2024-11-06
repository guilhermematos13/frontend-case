import { defaultTheme } from "@styles/themes/defaultTheme"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { Header } from "."

describe("Header Component", () => {
	const renderWithTheme = (ui: React.ReactNode) => {
		return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>)
	}

	it("should render the header with the provided title, subtitle, description, and disclaimer", () => {
		renderWithTheme(
			<Header
				title="Main Title"
				subtitle="Sub Title"
				description="This is a description"
				disclaimer="This is a disclaimer"
			/>,
		)

		expect(screen.getByText("Main Title")).toBeInTheDocument()
		expect(screen.getByText("Sub Title")).toBeInTheDocument()
		expect(screen.getByText("This is a description")).toBeInTheDocument()
		expect(screen.getByText("This is a disclaimer")).toBeInTheDocument()
	})

	it("should render the logo image with correct alt and title", () => {
		renderWithTheme(
			<Header
				title="Main Title"
				subtitle="Sub Title"
				description="This is a description"
				disclaimer="This is a disclaimer"
			/>,
		)
		const logoImage = screen.getByAltText("Cora")
		expect(logoImage).toBeInTheDocument()
		expect(logoImage).toHaveAttribute("title", "Cora")
	})

	it("should have correct styles applied to the header elements", () => {
		renderWithTheme(
			<Header
				title="Main Title"
				subtitle="Sub Title"
				description="This is a description"
				disclaimer="This is a disclaimer"
			/>,
		)

		const titleElement = screen.getByText("Main Title")
		const subtitleElement = screen.getByText("Sub Title")
		const descriptionElement = screen.getByText("This is a description")
		const disclaimerElement = screen.getByText("This is a disclaimer")
		expect(titleElement).toHaveStyle("font-size: 3.5rem")
		expect(titleElement).toHaveStyle("font-weight: 700")
		expect(subtitleElement).toHaveStyle("font-size: 1.75rem")
		expect(subtitleElement).toHaveStyle("font-weight: 400")
		expect(descriptionElement).toHaveStyle("font-size: 1.125rem")
		expect(disclaimerElement).toHaveStyle(
			"background-color: rgba(0, 0, 0, 0.02)",
		)
		expect(disclaimerElement).toHaveStyle("border: 1px solid #dfdfdf")
	})
})
