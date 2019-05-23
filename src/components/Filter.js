import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        
        const onFilter = this.props.onFilter;

        const input = dom.querySelector('input');

        input.addEventListener('input', () => {
            onFilter({
                text: input.value
            });
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div id="filter">
                <label>Filter: 
                    <input name="filter">
                </label>
            </div>
        `;
    }
}

export default Filter;