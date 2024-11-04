type FilterButtonsProps = {
	options: Array<Options>
	onSelect: (value: string) => void
}

type Options = {
	value: string
	label: string
}

type FilterButtonStyledProps = {
	$selected: boolean
}

export type { FilterButtonsProps, Options, FilterButtonStyledProps }
