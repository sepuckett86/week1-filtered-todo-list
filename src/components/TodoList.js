import Component from './Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    render() {
        const dom = this.renderDOM();

        const todos = this.props.todos;
        const onRemove = this.props.onRemove;
        const onDone = this.props.onDone;

        todos
            .map(todo => new TodoItem({ todo, onRemove, onDone }))
            .map(todoItemComponent => todoItemComponent.render())
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