const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const listItems = ingredients
  .map((elem) => `<li>${elem}</li>`
  )
  .join('\n');
listIngredients.insertAdjacentHTML('beforeend', listItems);