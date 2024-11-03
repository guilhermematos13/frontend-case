import { useState, forwardRef } from "react"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import {
	ActionButtonStyled,
	ErrorMessageStyled,
	InputContainerStyled,
	InputStyled,
} from "./styles"
import { InputProps } from "./types"

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ errorMessage, ...props }, ref) => {
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
						ref={ref}
						type={isPasswordType && isPasswordVisible ? "text" : props.type}
					/>
					{isPasswordType && (
						<ActionButtonStyled onClick={togglePasswordVisibility}>
							{isPasswordVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
						</ActionButtonStyled>
					)}
				</InputContainerStyled>
				{errorMessage && (
					<ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>
				)}
			</>
		)
	},
)
