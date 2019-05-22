import Component from './Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    render() {
        const dom = this.renderDOM();

        const todos = this.props.todos;

        todos
            .map(todo => new TodoItem({ todo }))
            .map(todoItemComponent => todoItemComponent.renderDOM())
            .forEach(todoItemComponentDOM => dom.appendChild(todoItemComponentDOM));

        
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <ul id="todos"></ul>
        `;
    }
}

export default TodoList;