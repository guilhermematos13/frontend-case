import { Eye, EyeSlash } from "@phosphor-icons/react"
import {
	ActionButtonStyled,
	ErrorMessageStyled,
	InputContainerStyled,
	InputStyled,
} from "./styles"
import { InputProps } from "./types"
import { useState } from "react"

export const Input = ({ errorMessage, ...props }: InputProps) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	const isPasswordType = props.type === "password"

	return (
		<>
			<InputContainerStyled>
				<InputStyled
					{...props}
					type={isPasswordType && isPasswordVisible ? "text" : props.type}
				/>
				{isPasswordType && (
					<ActionButtonStyled onClick={togglePasswordVisibility}>
						{isPasswordVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
					</ActionButtonStyled>
				)}
			</InputContainerStyled>
			{errorMessage ? (
				<ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>
			) : null}
		</>
	)
}
