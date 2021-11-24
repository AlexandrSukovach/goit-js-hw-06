
const ulCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulCategories.length}`);

const elementUlCategories = [...ulCategories];

const elemTwoFirst = elementUlCategories.map(Categories => `\nCategory: ${Categories.children[0].textContent}
Elements: ${Categories.children[1].children.length}`).join("\n");
console.log(elemTwoFirst);