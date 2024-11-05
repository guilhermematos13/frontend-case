import axios from "axios"

const apiUrl = import.meta.env.VITE_BASE_URL

export const api = axios.create({
	baseURL: apiUrl,
})
