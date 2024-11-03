import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { AppRouterNamesEnum } from "./constants"
import { Todo } from "./pages/Todo"
import { IBanking } from "./pages/IBanking"

export function Router() {
	return (
		<Routes>
			<Route path={AppRouterNamesEnum.HOME} element={<Home />} />
			<Route path={AppRouterNamesEnum.IBANKING} element={<IBanking />} />
			<Route path={AppRouterNamesEnum.TODO} element={<Todo />} />
		</Routes>
	)
}
