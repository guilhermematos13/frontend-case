export function formatDocument(value: string): string {
	const numericValue = value.replace(/\D/g, "")

	if (/^\d+$/.test(value) && numericValue.length === 11) {
		return numericValue
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
	}

	return value
}
