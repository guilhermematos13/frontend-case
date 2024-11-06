import toast from "react-hot-toast"
import { ToastErrorProps } from "./types"
import { defaultTheme } from "@styles/themes/defaultTheme"

export const ToastError = ({ message }: ToastErrorProps) => {
	return toast.error(message, {
		style: {
			fontFamily: "Nunito Sans",
		},
		iconTheme: {
			primary: defaultTheme.colors.colorMain,
			secondary: defaultTheme.colors.white,
		},
	})
}
