const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', e => {
	const value = e.target.value
	output.textContent = value 

	if (value  === '') {
		output.textContent = 'Anonymous'
	}
})
