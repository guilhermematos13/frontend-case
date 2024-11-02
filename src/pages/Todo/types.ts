type TodoListProps = {
	id: string
	ref: string
	title: string
	description: JSX.Element
	status: ITodoTypes
	required: boolean
	links?: Array<ILinksTypes>
}

type ILinksTypes = {
	name: string
	url: string
}

type ITodoTypes = "pending" | "done"

export enum ITodoTypesName {
	PENDING = "pending",
	DONE = "done",
}

export type { TodoListProps }
