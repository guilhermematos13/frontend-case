import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { TODO_LIST } from "./initial-state"
import { ITodoTypesName, TodoListProps } from "./types"
import { ToDoCard } from "./components/ToDoCard"
import { ToDoCardEmpty } from "./components/ToDoCardEmpty"
import { ToDoWrapperStyled } from "./styles"
import { ToDoSearchForm } from "./components/ToDoSearch"
import { ContainerStyled } from "../../components/Container/styles"
import { Header } from "../../components/Header"
import { headerData } from "./constants"

export function Todo() {
	const [items, setItems] = useState<TodoListProps[]>(TODO_LIST)
	const [searchInputValue, setSearchInputValue] = useState("")
	const [search, setSearch] = useState("")

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchInputValue(event.target.value)
	}

	const handleClearInput = () => {
		setSearchInputValue("")
	}

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setSearch(searchInputValue)
	}

	const handleDeleteTask = (id: string) => {
		const newListItems = items.filter((item) => item.id !== id)

		setItems(newListItems)
	}

	const handleChangeTaskStatus = (
		id: string,
		status: TodoListProps["status"],
	) => {
		const isPendingStatus = status === ITodoTypesName.PENDING

		const changeStatus = isPendingStatus
			? ITodoTypesName.DONE
			: ITodoTypesName.PENDING

		const editedItems = items.map((item) =>
			item.id === id ? { ...item, status: changeStatus } : item,
		)

		setItems(editedItems)
	}

	useEffect(() => {
		if (search.length > 0) {
			setItems(TODO_LIST.filter((item) => item.title.includes(search)))
		} else {
			setItems(TODO_LIST)
		}
	}, [search])

	return (
		<ContainerStyled>
			<ToDoWrapperStyled>
				<Header
					title={headerData.title}
					subtitle={headerData.subtitle}
					description={headerData.description}
					disclaimer={headerData.disclaimer}
				/>
				<div className="todo__wrapper">
					<ToDoSearchForm
						handleChange={handleChange}
						search={searchInputValue}
						handleSearch={handleSearch}
						handleClearInput={handleClearInput}
					/>
					<ul className="todo__list">
						{items.length === 0 && <ToDoCardEmpty />}
						{items.map((item) => (
							<li key={item.id}>
								<ToDoCard
									item={item}
									handleChangeTaskStatus={() =>
										handleChangeTaskStatus(item.id, item.status)
									}
									handleDeleteTask={() => handleDeleteTask(item.id)}
								/>
							</li>
						))}
					</ul>
				</div>
			</ToDoWrapperStyled>
		</ContainerStyled>
	)
}
