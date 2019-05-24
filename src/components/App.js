import todosData from '../../data/todos.js';
import filterTodos from '../filter-todos.js';
import api from '../services/api.js';

import Component from './Component.js';
import Header from './Header.js';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import Filter from './Filter.js';

const defaultFilter = {
    text: '',
    radio: 'all'
};

class App extends Component {
    render() {
        const dom = this.renderDOM();
        this.state.filter = defaultFilter;
        // Check whether there are todos in LocalStorage
        let todos;
        const todosInLocalStorage = api.getTodos();
        if(todosInLocalStorage) {
            todos = todosInLocalStorage;
        } else {
            todos = todosData;
        }
        this.state.todos = todos;
        api.saveTodos(todos);

        // Methods to pass as Props
        const onAdd = (todo) => {
            todos.unshift(todo);
            // update the component with the data
            api.saveTodos(todos);
            // TODO: only update if filter.radio = done
            if(this.state.filter.radio === 'completed') {
                this.resetFilter();
            }
            this.updateTodos();
        };

        const onRemove = (todoToRemove) => {
            const index = todos.indexOf(todoToRemove);
            todos.splice(index, 1);
            api.saveTodos(todos);
            this.updateTodos();
        };

        const onDone = (todoToCheck) => {
            const index = todos.indexOf(todoToCheck);
            todos[index].completed = !todos[index].completed;
            api.saveTodos(todos);
            this.updateTodos();
        };

        const onFilter = (filter) => {
            this.state.filter = filter;
            this.updateTodos();
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
        this.filterComponent = filterComponent;
        const filterComponentDOM = filterComponent.render();
        main.appendChild(filterComponentDOM);
        
        // TodoList
        const todoListComponent = new TodoList({ 
            todos,
            onRemove,
            onDone
        });
        this.todoList = todoListComponent;
        const todoListComponentDOM = todoListComponent.render();
        main.appendChild(todoListComponentDOM);

        return dom;
    }

    updateTodos() {
        const filtered = filterTodos(this.state.filter, this.state.todos);
        this.todoList.update({ todos: filtered });
    }

    resetFilter() {
        this.filterComponent.update();
        this.state.filter = defaultFilter;
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