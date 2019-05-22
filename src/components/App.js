import todos from '../../data/todos.js';

import Component from './Component.js';
import Header from './Header.js';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        // Header
        const headerComponent = new Header();
        const headerComponentDOM = headerComponent.render();
        dom.insertBefore(headerComponentDOM, main);

        // AddTodo
        const addTodoComponent = new AddTodo({
            onAdd: (todo) => {
                todos.unshift(todo);
                // update the component with the data
                todoListComponent.update({ todos });
            }
        });
        const addTodoComponentDOM = addTodoComponent.render();
        main.appendChild(addTodoComponentDOM);

        // TodoList
        const todoListComponent = new TodoList({ todos });
        const todoListComponentDOM = todoListComponent.render();
        main.appendChild(todoListComponentDOM);

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;