import Component from './Component.js';

class TodoItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;
        let checked = '';
        if(todo.completed) {
            checked = ' ' + 'checked';
        }
        return /*html*/ `
            <li>
                <label>
                    ${todo.task}
                    <input type="checkbox" name="todo"${checked}>
                </label>
            </li>
        `;
    }
}

export default TodoItem;