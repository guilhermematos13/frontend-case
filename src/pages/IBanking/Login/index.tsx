import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import logoFullImage from "@assets/logo-full.svg"
import arrowRightImage from "@assets/arrow-right.svg"
import * as S from "./styles"
import { useNavigate } from "react-router-dom"
import { useStorage } from "@hooks/useStorage"
import { useEffect, useState } from "react"
import { LoginFormProps, LoginFormSchema } from "./schema"
import { errorMessages, LocalStorageNameEnum } from "../constants"
import { AppRouterNamesEnum } from "@routes/constants"
import { Input } from "./components/Input"
import { formatDocument } from "@/utils/format-document"
import { LoginButton } from "./components/Button"
import axios, { HttpStatusCode } from "axios"
import { ToastError } from "@components/ToastError"
import { requestAuth } from "@api/Auth"
import { cpf } from "cpf-cnpj-validator"
import { AES } from "crypto-js"

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

	const handleRequestByDocument = async (data: LoginFormProps) => {
		const documentUnmasked = data.userLogin.replace(/[.-]/g, "")

		try {
			const cpfValidator = cpf.isValid(documentUnmasked)

			if (cpfValidator) {
				const authResponse = await requestAuth({
					cpf: documentUnmasked,
					password: data.password,
				})

				if (authResponse.token) {
					const token = AES.encrypt(
						authResponse.token,
						import.meta.env.VITE_SECRET_KEY,
					).toString()

					setStorage(LocalStorageNameEnum.TOKEN, token)
					navigate(AppRouterNamesEnum.IBANKING_LIST)
				}
			} else {
				setError("userLogin", { message: errorMessages.DOCUMENT_INVALID })
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const statusCode = error.response?.status
				if (HttpStatusCode.Unauthorized === statusCode) {
					return setError("password", { message: errorMessages.UNATHORIZED })
				}
				return ToastError({
					message: errorMessages.INTERNAL_SERVER_ERROR,
				})
			}
		} finally {
			setIsLoading(false)
		}
	}

	const handleRequestByEmail = async (data: LoginFormProps) => {
		try {
			const authResponse = await requestAuth({
				cpf: data.userLogin,
				password: data.password,
			})

			if (authResponse.token) {
				const token = AES.encrypt(
					authResponse.token,
					import.meta.env.VITE_SECRET_KEY,
				).toString()

				setStorage(LocalStorageNameEnum.TOKEN, token)
				navigate(AppRouterNamesEnum.IBANKING_LIST)
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const statusCode = error.response?.status
				if (HttpStatusCode.Unauthorized === statusCode) {
					return setError("password", { message: errorMessages.UNATHORIZED })
				}
				return ToastError({
					message: errorMessages.INTERNAL_SERVER_ERROR,
				})
			}
		} finally {
			setIsLoading(false)
		}
	}

	const onSubmit = async (data: LoginFormProps) => {
		setIsLoading(true)
		const documentUnmasked = data.userLogin.replace(/[.-]/g, "")
		const isDocument = documentUnmasked.length === 11

		if (isDocument) {
			handleRequestByDocument(data)
		} else {
			handleRequestByEmail(data)
		}
	}

	useEffect(() => {
		const userWithToken = getStorage<string>(LocalStorageNameEnum.TOKEN)

		if (userWithToken) {
			navigate(AppRouterNamesEnum.IBANKING_LIST)
		}
	}, [])

	return (
		<S.MainContainerStyled>
			<S.LoginContainerStyled>
				<img src={logoFullImage} alt="Cora" title="Cora" />
				<S.ContentContainerStyled>
					<S.TitleStyled>Fazer LogIn</S.TitleStyled>
					<S.FormContainerStyled onSubmit={handleSubmit(onSubmit)}>
						<S.InputContainerStyled>
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
						</S.InputContainerStyled>
						<LoginButton
							isLoading={isLoading}
							type="submit"
							disabled={isLoading || hasInputError}
						>
							<S.ButtonContainerStyled>
								<strong>Continuar</strong>
								<img src={arrowRightImage} />
							</S.ButtonContainerStyled>
						</LoginButton>
					</S.FormContainerStyled>
				</S.ContentContainerStyled>
			</S.LoginContainerStyled>
		</S.MainContainerStyled>
	)
}
