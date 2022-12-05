const expirationSelect = document.querySelector("[data-expiration-year]")

const currentYear = new Date().getFullYear()
for (let i = currentYear; i < currentYear + 10; i++) {
	const option = document.createElement("option")

}