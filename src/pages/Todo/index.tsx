import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { TODO_LIST } from "./initial-state"
import logoImage from "../../assets/logo.svg"
import "./index.css"
import { ITodoTypesName, TodoListProps } from "./types"

export function Todo() {
	const [items, setItems] = useState<TodoListProps[]>(TODO_LIST)
	const [searchInputValue, setSearchInputValue] = useState("")
	const [search, setSearch] = useState("")

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchInputValue(event.target.value)
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
		<main id="page" className="todo">
			<div>
				<img src={logoImage} alt="Cora" title="Cora" />
				<h1>Weekly to-do list &#128467;</h1>
				<h2>
					Bem-vindo ao nosso produto <i>fake</i> de <strong>to-do</strong> list
				</h2>
				<p>
					Marque como{" "}
					<strong>
						<u>done</u>
					</strong>{" "}
					as tasks que você conseguir concluir (elas já precisam renderizar com
					o status <strong>done</strong>)
				</p>
				<p className="disclaimer">
					Items obrigatórios marcados com arteristico (<strong>*</strong>)
				</p>
				<div className="todo__wrapper">
					<form className="todo__search" onSubmit={handleSearch}>
						<input
							id="search"
							placeholder="busca por texto..."
							defaultValue={search}
							onChange={handleChange}
						/>
						<button type="submit">buscar</button>
					</form>
					<ul className="todo__list">
						{items.length === 0 && (
							<span>
								<strong>Ops!!!</strong> Nenhum resultado foi encontrado
								&#128533;
							</span>
						)}
						{items.map((item) => (
							<li key={item.id}>
								<span>
									{item.ref}
									{item.required ? "*" : ""}.
								</span>
								<div className="todo__content">
									<h3>
										{item.title}
										<span data-type={item.status}>{item.status}</span>
									</h3>
									<p>{item.description}</p>
									{item.links && item.links.length > 0 && (
										<div className="todo__links">
											{item.links.map((link) => (
												<a key={link.name} target="_blank" href={link.url}>
													{link.name}
												</a>
											))}
										</div>
									)}
									<div className="todo__actions">
										<button onClick={() => handleDeleteTask(item.id)}>
											delete
										</button>
										<button
											onClick={() => {
												handleChangeTaskStatus(item.id, item.status)
											}}
										>
											change to{" "}
											<strong>
												<u>{item.status === "done" ? "pending" : "done"}</u>
											</strong>
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	)
}
