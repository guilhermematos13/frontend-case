import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import logoFullImage from "../../../assets/logo-full.svg"
import arrowRightImage from "../../../assets/arrow-right.svg"
import {
	ButtonContainerStyled,
	ContentContainerStyled,
	FormContainerStyled,
	InputContainerStyled,
	LoginContainerStyled,
	MainContainerStyled,
	TitleStyled,
} from "./styles"
import { Input } from "./components/Input"
import { LoginFormProps, LoginFormSchema } from "./schema"
import { formatDocument } from "../../../utils/format-document"
import { requestAuth } from "../../../api/Auth"
import { useEffect, useState } from "react"
import { LoginButton } from "./components/Button"
import axios, { HttpStatusCode } from "axios"
import { ToastError } from "../../../components/ToastError"
import { useStorage } from "../../../hooks/useStorage"
import { useNavigate } from "react-router-dom"
import { AppRouterNamesEnum } from "../../../routes/constants"
import { errorMessages, LocalStorageNameEnum } from "../constants"
import { cpf } from "cpf-cnpj-validator"

export function Login() {
	const navigate = useNavigate()
	const { setStorage, getStorage } = useStorage()
	const [isLoading, setIsLoading] = useState(false)
	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<LoginFormProps>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			userLogin: "",
			password: "",
		},
	})

	const hasInputError = Object.keys(errors).length > 0

	const onSubmit = async (data: LoginFormProps) => {
		setIsLoading(true)
		const documentUnmasked = data.userLogin.replace(/[.-]/g, "")
		try {
			const cpfValidator = cpf.isValid(documentUnmasked)

			if (cpfValidator) {
				const authResponse = await requestAuth({
					cpf: documentUnmasked,
					password: data.password,
				})

				if (authResponse.token) {
					setStorage(LocalStorageNameEnum.TOKEN, authResponse.token)
					navigate(AppRouterNamesEnum.IBANKING_LIST)
				}
			} else {
				setError("userLogin", { message: errorMessages.DOCUMENT_INVALID })
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const statusCode = error.response?.status
				switch (statusCode) {
					case HttpStatusCode.Unauthorized:
						return setError("password", { message: errorMessages.UNATHORIZED })

					default:
						return ToastError({
							message: errorMessages.INTERNAL_SERVER_ERROR,
						})
				}
			}
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		const userWithToken = getStorage<string>(LocalStorageNameEnum.TOKEN)

		if (userWithToken) {
			navigate(AppRouterNamesEnum.IBANKING_LIST)
		}
	}, [])

	return (
		<MainContainerStyled>
			<LoginContainerStyled>
				<img src={logoFullImage} alt="Cora" title="Cora" />
				<ContentContainerStyled>
					<TitleStyled>Fazer LogIn</TitleStyled>
					<FormContainerStyled onSubmit={handleSubmit(onSubmit)}>
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
						<LoginButton
							isLoading={isLoading}
							type="submit"
							disabled={isLoading || hasInputError}
						>
							<ButtonContainerStyled>
								<strong>Continuar</strong>
								<img src={arrowRightImage} />
							</ButtonContainerStyled>
						</LoginButton>
					</FormContainerStyled>
				</ContentContainerStyled>
			</LoginContainerStyled>
		</MainContainerStyled>
	)
}
