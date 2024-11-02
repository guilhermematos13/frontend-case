import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyle } from "./styles/global"
import "./App.css"

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<GlobalStyle />
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
