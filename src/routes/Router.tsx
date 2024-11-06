import { Navigate, Route, Routes } from "react-router-dom"
import { AppRouterNamesEnum } from "./constants"
import { Home } from "@pages/Home"
import { EnumIBankingTypesName } from "@pages/IBanking/types"
import { IBanking } from "@pages/IBanking"
import { Todo } from "@pages/Todo"

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
