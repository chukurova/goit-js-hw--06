const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
ingredients.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item');
  listIngredients.appendChild(listItem);
});