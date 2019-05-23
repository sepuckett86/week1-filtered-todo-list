import Component from './Component.js';

class Filter extends Component {
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