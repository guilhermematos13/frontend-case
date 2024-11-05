import { requestList } from "@api/List"
import { IListResponse, ItemsType } from "@api/List/types"
import { ToastError } from "@components/ToastError"
import { useStorage } from "@hooks/useStorage"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { errorMessages, LocalStorageNameEnum } from "../constants"
import { HeaderContainer, MainContainerList } from "./styles"
import { FilterButtons } from "./Components/FilterButtons"
import { buttonsFilterOptions } from "./constants"
import { LogoutButton } from "./Components/LogoutButton"
import { ExtractCard } from "./Components/ExtractCard"
import { calculateDailyBalance } from "@utils/calculate-balance-day"
import { AppRouterNamesEnum } from "@routes/constants"

export function List() {
	const [filteredList, setFilteredList] = useState<IListResponse["results"]>()
	const [list, setList] = useState<IListResponse>()
	const { getStorage } = useStorage()
	const navigate = useNavigate()

	const handleRequestList = async (token: string) => {
		try {
			const requestListResponse = await requestList({
				token,
			})

			if (requestListResponse) {
				setList(requestListResponse)
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const statusCode = error.response?.status
				switch (statusCode) {
					default:
						return ToastError({
							message: errorMessages.INTERNAL_SERVER_ERROR,
						})
				}
			}
		}
	}

	const handleChangeListByFilter = useCallback(
		(filter: "DEBIT" | "CREDIT" | undefined) => {
			if (filter) {
				const filtered = list?.results
					?.map((result) => ({
						...result,
						items: result.items.filter((item) => item.entry === filter),
					}))
					.filter((result) => result.items.length > 0)

				setFilteredList(filtered)
			} else {
				setFilteredList(list?.results)
			}
		},
		[list],
	)

	useEffect(() => {
		const token = getStorage<string>(LocalStorageNameEnum.TOKEN)

		if (token) {
			handleRequestList(token)
		} else {
			navigate(AppRouterNamesEnum.IBANKING_LOGIN)
		}
	}, [])

	return (
		<MainContainerList>
			<HeaderContainer>
				<FilterButtons
					options={buttonsFilterOptions}
					onSelect={(value) => {
						handleChangeListByFilter(value as ItemsType["entry"])
					}}
				/>
				<LogoutButton />
			</HeaderContainer>
			{filteredList
				? filteredList?.map((result) => (
						<ExtractCard
							key={result.date}
							items={result.items}
							date={result.date}
							balanceDay={calculateDailyBalance(filteredList, result.date)}
						/>
					))
				: list?.results?.map((result) => (
						<ExtractCard
							key={result.date}
							items={result.items}
							date={result.date}
							balanceDay={calculateDailyBalance(list.results, result.date)}
						/>
					))}
		</MainContainerList>
	)
}
