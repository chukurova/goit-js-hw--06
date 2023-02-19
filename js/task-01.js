const categories = document.querySelector('ul#categories');
const item = document.querySelectorAll('li.item');
console.log('Number of categories: ', categories.children.length);
item.forEach(function(item){
    const title = item.querySelector('h2').textContent;
    const element = item.querySelectorAll('li').length;
    console.log('Category: ' + title);
    console.log('Elements: ' + element);
});