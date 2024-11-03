export const useStorage = () => {
	const getStorage = (key: string) => {
		const storageValue = localStorage.getItem(key)

		return JSON.parse(storageValue ?? "")
	}

	const setStorage = (key: string, value: unknown) => {
		return localStorage.setItem(key, JSON.stringify(value))
	}

	const removeStorage = (key: string) => {
		return localStorage.removeItem(key)
	}

	return {
		getStorage,
		setStorage,
		removeStorage,
	}
}
