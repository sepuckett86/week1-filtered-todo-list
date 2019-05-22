import Component from './Component.js';

class TodoList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul id="todos">test</ul>
        `;
    }
}

export default TodoList;