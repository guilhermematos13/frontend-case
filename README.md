# Desafio Cora

Esse projeto foi feito como um desafio para a empresa Cora para a vaga de Frontend.

Neste teste, simulei a criação e manutenção de um projeto real, aplicando todas as práticas e técnicas que considero importantes em um projeto frontend.

O objetivo do teste era avaliar minha capacidade de desenvolver interfaces web. Fui responsável por resolver bugs, implementar melhorias, adicionar novas funcionalidades e criar uma página de acordo com as especificações fornecidas.

## ⚙️ Installation / Instalação

Clone Repository / Clonar repositório

```bash
  git clone https://github.com/guilhermematos13/frontend-case.git
```

Install Dependencies / Instalar Dependências

```bash
  npm install
```

Run Project / Rodar o projeto

```bash
  npm run dev
```

Build Project / Gerar build do Projeto

```bash
  npm run build
```

Run Tests / Rodar os Testes

```bash
  npm run test
```

## API Contracts / Contratos com APIs.

A `api` já é fornecida, e por ser em javascript você tem total poder de edição e manutenção dela no próprio projeto.

## Auth

cURL:

```bash
curl --location 'http://localhost:4000/auth' \
--header 'Content-Type: application/json' \
--data '{
    "cpf": "35819357833",
    "password": "123456"
}'
```

**Info**: O `cpf` e `password` são fixos, ou seja, são exatamente os mesmos que estão no **cURL** :)

Response:

```json
{
	"token": "$TOKEN"
}
```

## List

cURL:

```bash
curl --location 'http://localhost:4000/list' \
--header 'token: $TOKEN'
```

Response Interface:

```ts
interface IResponseList {
	results: {
		items: {
			id: string
			description: string
			label: string
			entry: "DEBIT" | "CREDIT"
			amount: number //in cents
			name: string
			dateEvent: string //ex: 2024-01-11T14:47:46Z
			status: string
		}[]
		date: string //ex: 2024-02-01
	}[]
	itemsTotal: number
}
```

## 🖥️ Technologies Used / Tecnologias Usadas

- React (18.2.0)
- Typescript (5.2.2)

## 📚 Libraries Used / Bibliotecas Usadas

- axios
- cpf-cnpj-validator
- crypto-js
- date-fns
- jest
- prettier
- react-hook-form
- react-hot-toast
- react-router-dom
- styled-components
- testing-library
- zod

## Coverage
<img width="665" src="https://github.com/user-attachments/assets/ddadafaa-91dc-4885-ab48-340d16c20511">

## Portas de Acesso

Front: http://localhost:3000
Back: http://localhost:4000
