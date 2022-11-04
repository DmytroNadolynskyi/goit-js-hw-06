const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)
console.log

categoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
