import { defaultTheme } from "@styles/themes/defaultTheme"
import { screen, fireEvent, render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { ButtonLink } from "."

describe("ButtonLink Component", () => {
	const renderWithTheme = (ui: React.ReactNode) => {
		return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>)
	}

	it("should render the button link with the given children", () => {
		renderWithTheme(<ButtonLink>Click Me</ButtonLink>)
		const buttonLinkElement = screen.getByText("Click Me")
		expect(buttonLinkElement).toBeInTheDocument()
	})

	it("should apply the 'button' variant styles by default", () => {
		renderWithTheme(<ButtonLink>Default Variant</ButtonLink>)
		const buttonLinkElement = screen.getByText("Default Variant")
		expect(buttonLinkElement).toHaveStyle("display: inline-block")
		expect(buttonLinkElement).toHaveStyle("padding: 1rem")
		expect(buttonLinkElement).toHaveStyle("font-size: 1rem")
		expect(buttonLinkElement).toHaveStyle("border: 1px solid #fe3e6d")
	})

	it("should apply the 'textLink' variant styles when specified", () => {
		renderWithTheme(
			<ButtonLink variant="textLink">Text Link Variant</ButtonLink>,
		)
		const buttonLinkElement = screen.getByText("Text Link Variant")
		expect(buttonLinkElement).toHaveStyle("display: inline-block")
		expect(buttonLinkElement).toHaveStyle("font-size: 0.75rem")
		expect(buttonLinkElement).toHaveStyle("color: #fe3e6d")
	})

	it("should trigger the onClick event when clicked", () => {
		const handleClick = jest.fn()
		renderWithTheme(<ButtonLink onClick={handleClick}>Click Me</ButtonLink>)
		const buttonLinkElement = screen.getByText("Click Me")
		fireEvent.click(buttonLinkElement)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it("should apply hover styles correctly when 'button' variant is used", () => {
		renderWithTheme(<ButtonLink>Hover Test</ButtonLink>)
		const buttonLinkElement = screen.getByText("Hover Test")
		fireEvent.mouseOver(buttonLinkElement)
		expect(buttonLinkElement).toHaveStyle("background-color: #fe3e6d")
		expect(buttonLinkElement).toHaveStyle("color: #ffffff")
	})
})
