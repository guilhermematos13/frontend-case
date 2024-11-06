import { render, screen, fireEvent } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { Button } from "."
import { defaultTheme } from "@styles/themes/defaultTheme"

describe("Button Component", () => {
	const renderWithTheme = (ui: React.ReactNode) => {
		return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>)
	}

	it("should render the button with the given children", () => {
		renderWithTheme(<Button>Click Me</Button>)
		const buttonElement = screen.getByText("Click Me")
		expect(buttonElement).toBeInTheDocument()
	})

	it("should apply the 'normal' variant styles by default", () => {
		renderWithTheme(<Button>Default Variant</Button>)
		const buttonElement = screen.getByText("Default Variant")
		expect(buttonElement).toHaveStyle(`font-size: 1rem`)
	})

	it("should apply the 'small' variant styles when specified", () => {
		renderWithTheme(<Button variant="small">Small Variant</Button>)
		const buttonElement = screen.getByText("Small Variant")
		expect(buttonElement).toHaveStyle(`font-size: 0.75rem`)
	})

	it("should trigger the onClick event when clicked", () => {
		const handleClick = jest.fn()
		renderWithTheme(<Button onClick={handleClick}>Click Me</Button>)
		const buttonElement = screen.getByText("Click Me")
		fireEvent.click(buttonElement)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
