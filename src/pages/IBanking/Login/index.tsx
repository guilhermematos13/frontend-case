import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import logoFullImage from "../../../assets/logo-full.svg"
import arrowRightImage from "../../../assets/arrow-right.svg"
import {
	ButtonContainerStyled,
	ContentContainerStyled,
	InputContainerStyled,
	LoginContainerStyled,
	MainContainerStyled,
	TitleStyled,
} from "./styles"
import { Input } from "./components/Input"
import { LoginFormProps, LoginFormSchema } from "./schema"
import { formatDocument } from "../../../utils/format-document"
import { requestAuth } from "../../../api/Auth"
import { useState } from "react"
import { LoginButton } from "./components/Button"
import axios, { HttpStatusCode } from "axios"
import { ToastError } from "../../../components/ToastError"
import { loginErrorMessages } from "./constants"
import { useStorage } from "../../../hooks/useStorage"
import { useNavigate } from "react-router-dom"
import { AppRouterNamesEnum } from "../../../constants"

export function Login() {
	const navigate = useNavigate()
	const { setStorage } = useStorage()
	const [isLoading, setIsLoading] = useState(false)
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormProps>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			userLogin: "",
			password: "",
		},
	})

	const onSubmit = async (data: LoginFormProps) => {
		setIsLoading(true)
		const documentUnmasked = data.userLogin.replace(/[.-]/g, "")
		try {
			const authResponse = await requestAuth({
				cpf: documentUnmasked,
				password: data.password,
			})

			if (authResponse.token) {
				setStorage("token", authResponse.token)
				navigate(AppRouterNamesEnum.IBANKING_LIST)
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const statusCode = error.response?.status
				switch (statusCode) {
					case HttpStatusCode.Unauthorized:
						return ToastError({ message: loginErrorMessages.UNATHORIZED })

					default:
						return ToastError({
							message: loginErrorMessages.INTERNAL_SERVER_ERROR,
						})
				}
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<MainContainerStyled>
			<LoginContainerStyled>
				<img src={logoFullImage} alt="Cora" title="Cora" />
				<ContentContainerStyled>
					<TitleStyled>Fazer LogIn</TitleStyled>
					<InputContainerStyled>
						<div>
							<Controller
								name="userLogin"
								control={control}
								render={({ field }) => (
									<Input
										{...field}
										placeholder="Insira seu e-mail ou CPF"
										onChange={(e) => {
											const formattedValue = formatDocument(e.target.value)
											field.onChange(formattedValue)
										}}
										errorMessage={errors.userLogin?.message}
									/>
								)}
							/>
						</div>
						<div>
							<Controller
								name="password"
								control={control}
								render={({ field }) => (
									<Input
										{...field}
										type="password"
										id="password"
										placeholder="Digite sua senha"
										errorMessage={errors.password?.message}
									/>
								)}
							/>
						</div>
					</InputContainerStyled>
					<LoginButton isLoading={isLoading} onClick={handleSubmit(onSubmit)}>
						<ButtonContainerStyled>
							<strong>Continuar</strong>
							<img src={arrowRightImage} />
						</ButtonContainerStyled>
					</LoginButton>
				</ContentContainerStyled>
			</LoginContainerStyled>
		</MainContainerStyled>
	)
}
