import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { AppRouterNamesEnum } from "./constants"
import { Todo } from "./pages/Todo"

export function Router() {
	return (
		<Routes>
			<Route path={AppRouterNamesEnum.HOME} element={<Home />} />
			<Route path={AppRouterNamesEnum.IBANKING} element={<></>} />
			<Route path={AppRouterNamesEnum.TODO} element={<Todo />} />
		</Routes>
	)
}
