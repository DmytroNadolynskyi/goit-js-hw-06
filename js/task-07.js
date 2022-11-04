const inputChange = document.querySelector('input#font-size-control')
const spanText = document.querySelector('span#text')

inputChange.addEventListener('change', e => {
    const value = e.target.value
    spanText.style.fontSize = `${value}px`
})
