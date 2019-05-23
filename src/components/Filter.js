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
                <label id="text-filter">Filter: 
                    <input name="filter" type="text">
                </label>
                <label>All
                    <input name="radio" type="radio" value="all" checked>
                </label>
                <label>Completed
                    <input name="radio" type="radio" value="done">
                </label>
                <label>Not Done
                    <input name="radio" type="radio" value="not-done">
                </label>
            </div>
        `;
    }
}

export default Filter;