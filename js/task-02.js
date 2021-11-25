const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients');

const elementEl = ingredients.map(elemet => {
  const nemElementEl = document.createElement('li');
  nemElementEl.classList.add('item');
  nemElementEl.textContent = elemet;
  return nemElementEl;
});

navEl.append(...elementEl);
