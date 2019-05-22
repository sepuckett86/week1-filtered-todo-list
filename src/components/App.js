import Component from './Component.js';
import Header from './Header.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        // Header
        const headerComponent = new Header();
        const headerComponentDOM = headerComponent.renderDOM();
        dom.insertBefore(headerComponentDOM, main);

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                Test
                </main>
            </div>
        `;
    }
}

export default App;