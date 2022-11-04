function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const changeBtn = document.querySelector('.change-color')
const body = document.querySelector('.body-class')
const colorValue = document.querySelector('.color')


changeBtn.addEventListener('click', e => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
})

