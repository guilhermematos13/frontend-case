export const useStorage = () => {
	const getStorage = <T>(key: string): T | null => {
		const storageValue = localStorage.getItem(key)
		return storageValue ? JSON.parse(storageValue) : null
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
