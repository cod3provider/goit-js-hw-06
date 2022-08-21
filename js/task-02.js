const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createIngredientEl = function (elements) {
  const createEl = elements.map(element => {
    const itemEl = document.createElement('li');
    itemEl.textContent = `${element}`;
    itemEl.classList.add('item');

    return itemEl;
  });

  const ingredientsListEl = document.querySelector('#ingredients');
  ingredientsListEl.append(...createEl);
  return ingredientsListEl;
}

createIngredientEl(ingredients);








// console.log(createIngredientEl(ingredients))

