
const qwerty = {
  increment: document.querySelector("[data-action='increment']"),
  decrement: document.querySelector("[data-action='decrement']"),
  value: document.querySelector("#value"),
};
let counterValue = 0;

function onIncrement() {
  counterValue += 1;
  return (qwerty.value.textContent = counterValue);
}

function onDecrement() {
  counterValue -= 1;
  return (qwerty.value.textContent = counterValue);
}


qwerty.increment.addEventListener("click", onIncrement);
qwerty.decrement.addEventListener("click", onDecrement);