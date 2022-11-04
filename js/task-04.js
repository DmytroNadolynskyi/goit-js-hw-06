
const refs = {
  increment: document.querySelector("[data-action='increment']"),
  decrement: document.querySelector("[data-action='decrement']"),
  value: document.querySelector("#value"),
};
let counterValue = 0;

function onIncrement() {
  counterValue += 1;
  return (refs.value.textContent = counterValue);
}

function onDecrement() {
  counterValue -= 1;
  return (refs.value.textContent = counterValue);
}

refs.increment.addEventListener("click", onIncrement);
refs.decrement.addEventListener("click", onDecrement);