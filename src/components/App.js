import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        // Header
        const headerComponent = new Header();
        const headerComponentDOM = headerComponent.renderDOM();
        dom.insertBefore(headerComponentDOM, main);

        // To do List
        const todoListComponent = new TodoList();
        const todoListComponentDOM = todoListComponent.renderDOM();
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