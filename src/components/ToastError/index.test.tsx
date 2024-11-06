import { render } from "@testing-library/react"
import toast from "react-hot-toast"
import { ToastError } from "."

jest.mock("react-hot-toast", () => ({
	error: jest.fn(),
}))

describe("ToastError", () => {
	it("should call toast.error with correct message and styles", () => {
		const message = "An error occurred"

		render(<ToastError message={message} />)

		expect(toast.error).toHaveBeenCalledWith(message, {
			style: {
				fontFamily: "Nunito Sans",
			},
			iconTheme: {
				primary: "#fe3e6d",
				secondary: "#ffffff",
			},
		})
		expect(toast.error).toHaveBeenCalledTimes(1)
	})
})
