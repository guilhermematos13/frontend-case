import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Toaster } from "react-hot-toast"
import { Router } from "@routes/Router"
import { defaultTheme } from "@styles/themes/defaultTheme"
import { GlobalStyle } from "@styles/global"

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Toaster />
				<GlobalStyle />
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	)
}
