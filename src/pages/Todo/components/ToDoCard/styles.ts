import styled from "styled-components"
import { ToDoCardStyledProps } from "./types"

export const ToDoContentStyled = styled.div`
	flex: 1;
	text-align: left;
`
export const ToDoReferenceContainerStyled = styled.span`
	@media (max-width: 768px) {
		font-size: ${({ theme }) => theme.size.sm};
	}
`

export const TitleAndStatusContainer = styled.div`
	display: flex;
	gap: 12px;

	@media (max-width: 768px) {
		justify-content: space-between;
	}
`

export const ToDoCardTitleStyled = styled.h3`
	font-size: ${({ theme }) => theme.size.md};
	line-height: ${({ theme }) => theme.size.sm};
	margin-bottom: ${({ theme }) => theme.size.sm};

	@media (max-width: 768px) {
		font-size: ${({ theme }) => theme.size.sm};
	}
`

export const ToDoCardStatusStyled = styled.span<ToDoCardStyledProps>`
	transform: translateY(-3px);
	font-size: ${({ theme }) => theme.size.xs};
	max-height: ${({ theme }) => theme.size.md};
	border: 1px solid;
	border-radius: ${({ theme }) => theme.size.xxxs};
	padding: ${({ theme }) => theme.size.xxxs};
	text-transform: uppercase;
	color: ${({ theme, $status }) =>
		$status === "done" ? theme.colors.success : theme.colors.error};
	border-color: ${({ theme, $status }) =>
		$status === "done" ? theme.colors.success : theme.colors.error};
`

export const ToDoDescriptionContainer = styled.div`
	font-size: ${({ theme }) => theme.size.sm};
	color: ${({ theme }) => theme.colors.gray};
`

export const ToDoLinksContainer = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.size.xxs};
	text-align: left;
	margin-top: ${({ theme }) => theme.size.xxs};
`

export const ToDoActionsContainer = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.size.xxs};
	margin-top: ${({ theme }) => theme.size.sm};
`
