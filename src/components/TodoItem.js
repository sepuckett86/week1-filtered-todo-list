import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const dom = this.renderDOM();
        const button = dom.querySelector('button');

        const onRemove = this.props.onRemove;
        const todo = this.props.todo;

        button.addEventListener('click', () => {
            onRemove(todo);
        });

        return dom;
    }

    renderTemplate() {
        const todo = this.props.todo;
        
        let checked = '';
        if(todo.completed) {
            checked = ' ' + 'checked';
        }

        return /*html*/ `
            <li>
                <label>
                    <input type="checkbox" name="todo"${checked}>
                    ${todo.task} 
                </label>
                <button>X</button>
            </li>
        `;
    }
}

export default TodoItem;