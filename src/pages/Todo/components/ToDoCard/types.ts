import { TodoListProps } from "../../types"

export type ToDoCardProps = {
	item: Omit<TodoListProps, "id">
	handleDeleteTask: () => void
	handleChangeTaskStatus: () => void
}

export type ToDoCardStyledProps = {
	$status?: TodoListProps["status"]
}
