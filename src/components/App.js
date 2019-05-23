import todosData from '../../data/todos.js';
import filterTodos from '../filter-todos.js';
import api from '../services/api.js';

import Component from './Component.js';
import Header from './Header.js';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import Filter from './Filter.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        // Check whether there are todos in LocalStorage
        let todos;
        const todosInLocalStorage = api.getTodos();
        if(todosInLocalStorage) {
            todos = todosInLocalStorage;
        } else {
            todos = todosData;
        }

        // Methods to pass as Props
        const onAdd = (todo) => {
            todos.unshift(todo);
            // update the component with the data
            todoListComponent.update({ todos });
            api.saveTodos(todos);
        };

        const onRemove = (todoToRemove) => {
            const index = todos.indexOf(todoToRemove);
            todos.splice(index, 1);
            todoListComponent.update({ todos });
            api.saveTodos(todos);
        };

        const onCheck = (todoToCheck) => {
            const index = todos.indexOf(todoToCheck);
            todos[index].completed = !todos[index].completed;
            todoListComponent.update({ todos });
            api.saveTodos(todos);
        };

        const onFilter = (filter) => {
            const filtered = filterTodos(filter, todos);
            todoListComponent.update({ todos: filtered });
        };

        // Pull DOM elements
        const main = dom.querySelector('main');

        // Header
        const headerComponent = new Header();
        const headerComponentDOM = headerComponent.render();
        dom.insertBefore(headerComponentDOM, main);

        // AddTodo
        const addTodoComponent = new AddTodo({
            onAdd
        });
        const addTodoComponentDOM = addTodoComponent.render();
        main.appendChild(addTodoComponentDOM);

        // Filter
        const filterComponent = new Filter({
            todos,
            onFilter
        });
        const filterComponentDOM = filterComponent.render();
        main.appendChild(filterComponentDOM);
        
        // TodoList
        const todoListComponent = new TodoList({ 
            todos,
            onRemove,
            onCheck
        });
        const todoListComponentDOM = todoListComponent.render();
        main.appendChild(todoListComponentDOM);

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;