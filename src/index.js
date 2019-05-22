import todoTemplate from './todo-template.js';
import headerTemplate from './header-template.js';
import htmlToDOM from './html-to-DOM.js';
import todos from '../data/todos.js';

const todoParent = document.getElementById('todos');
const header = document.getElementById('header');

// Add Header
const headerHTML = headerTemplate();
const headerDOM = htmlToDOM(headerHTML);
header.appendChild(headerDOM);

// Add To Dos
todos.forEach(todo => {
    const html = todoTemplate(todo);
    const dom = htmlToDOM(html);
    todoParent.appendChild(dom);
});
