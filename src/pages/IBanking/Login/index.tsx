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
import { LoginButtonStyled } from "./components/Button/styles"
import { LoginFormProps, LoginFormSchema } from "./schema"
import { formatDocument } from "../../../utils/format-document"

function Login() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormProps>({
		resolver: zodResolver(LoginFormSchema),
	})

	const onSubmit = (data: LoginFormProps) => {
		console.log("Dados do formulário:", data)
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
					<LoginButtonStyled onClick={handleSubmit(onSubmit)}>
						<ButtonContainerStyled>
							<strong>Continuar</strong>
							<img src={arrowRightImage} />
						</ButtonContainerStyled>
					</LoginButtonStyled>
				</ContentContainerStyled>
			</LoginContainerStyled>
		</MainContainerStyled>
	)
}

export { Login }
