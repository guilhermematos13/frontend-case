import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { Toaster } from "react-hot-toast"
import { Router } from "./routes/Router"

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
