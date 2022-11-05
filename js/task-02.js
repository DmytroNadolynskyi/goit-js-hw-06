const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const list = document.querySelector('#ingredients')
// const ingArr = []

// ingredients.forEach(ingredient => {
// 	const item = document.createElement('li')
// 	item.className = 'item'
// 	item.textContent = ingredient
// 	ingArr.push(item)
// })

// list.append(...ingArr)


const listEl = document.querySelector('#ingredients');
ingredients.map(elem => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = elem;
  listEl.append(itemEl);
});