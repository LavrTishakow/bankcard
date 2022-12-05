const expirationSelect = document.querySelector("[data-expiration-year]")

const currentYear = new Date().getFullYear()
for (let i = currentYear; i < currentYear + 10; i++) {
	const option = document.createElement("option")
	option.value = i
	option.innerText = i
	expirationSelect.append(option)
}


document.addEventListener("keydown", e => {
	const input = e.target
	const key = e.key
	if (!isConnectedInput(input)) return

	switch (key) {
		case "ArrowLeft": {
			if (input.selectionStart === 0 && input.selectionEnd === 0)
		}

		default: {

		}
	}
})

function isConnectedInput(input) {
	const parent = input.closest("[data-connected-inputs]")
	return target.matches("input") && parent != null
}