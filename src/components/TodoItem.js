import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const dom = this.renderDOM();
        const button = dom.querySelector('button');
        const input = dom.querySelector('input');

        const onRemove = this.props.onRemove;
        const onCheck = this.props.onCheck;
        const todo = this.props.todo;

        button.addEventListener('click', () => {
            onRemove(todo);
        });

        input.addEventListener('change', () => {
            onCheck(todo);
        });

        return dom;
    }

    renderTemplate() {
        const todo = this.props.todo;
        
        let checked = '';
        let spanClass = '';
        if(todo.completed) {
            checked = ' ' + 'checked';
            spanClass = 'class="checked"';
        }

        return /*html*/ `
            <li>
                <label>
                    <input type="checkbox" name="todo"${checked}>
                    <span ${spanClass}>${todo.task}</span>
                </label>
                <button>X</button>
            </li>
        `;
    }
}

export default TodoItem;