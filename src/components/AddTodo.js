import Component from './Component.js';

class AddTodo extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
            const newTodo = formData.get('new-todo');
            
            onAdd({
                task: newTodo,
                completed: false
            });
            form.reset();
            document.activeElement.blur();
        });
        
        
        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form id="addTodo">
                <label>
                    New To Do: 
                    <input type="text" name="new-todo">
                </label>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddTodo;