const categoriesRef = document.querySelectorAll('.item');

console.log('Number of categories: ', categoriesRef.length);

categoriesRef.forEach(function(category) {
	console.log('Category: ', category.firstElementChild.textContent);
	console.log('Elements: ', category.lastElementChild.children.length);
});