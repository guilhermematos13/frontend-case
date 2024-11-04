import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { AppRouterNamesEnum } from "./constants"
import { Todo } from "./pages/Todo"
import { IBanking } from "./pages/IBanking"
import { EnumIBankingTypesName } from "./pages/IBanking/types"

export function Router() {
	return (
		<Routes>
			<Route path={AppRouterNamesEnum.HOME} element={<Home />} />
			<Route
				path={AppRouterNamesEnum.IBANKING}
				element={<Navigate to={AppRouterNamesEnum.IBANKING_LOGIN} replace />}
			/>
			<Route
				path={AppRouterNamesEnum.IBANKING_LOGIN}
				element={<IBanking type={EnumIBankingTypesName.LOGIN} />}
			/>
			<Route
				path={AppRouterNamesEnum.IBANKING_LIST}
				element={<IBanking type={EnumIBankingTypesName.LIST} />}
			/>
			<Route path={AppRouterNamesEnum.TODO} element={<Todo />} />
		</Routes>
	)
}
