import { XCircle } from "@phosphor-icons/react"
import * as S from "./styles"
import { ToDoSearchProps } from "./types"

export const ToDoSearchForm = ({
	handleChange,
	handleSearch,
	search,
	handleClearInput,
}: ToDoSearchProps) => {
	return (
		<S.FormStyled className="todo__search" onSubmit={handleSearch}>
			<S.InputContainerStyled>
				<S.InputFormStyled
					id="search"
					placeholder="Busca por texto..."
					value={search}
					onChange={handleChange}
				/>
				<S.ButtonIconStyled
					$isVisible={search.length > 0}
					onClick={handleClearInput}
					type="button"
				>
					<XCircle size={20} />
				</S.ButtonIconStyled>
			</S.InputContainerStyled>

			<S.ButtonSubmitStyled type="submit">buscar</S.ButtonSubmitStyled>
		</S.FormStyled>
	)
}
