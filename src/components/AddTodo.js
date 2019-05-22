import Component from './Component.js';

class AddTodo extends Component {
    renderTemplate() {
        return /*html*/ `
            <form id="addTodo">
                <label>
                    New To Do: 
                    <input type="text" name="new-todo">
                </label>
            </form>
        `;
    }
}

export default AddTodo;