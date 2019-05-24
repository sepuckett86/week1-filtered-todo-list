import Component from './Component.js';

class Filter extends Component {
    render() {
        const form = this.renderDOM();
        
        const onFilter = this.props.onFilter;

        form.addEventListener('input', () => {
            const formData = new FormData(form);
            const text = formData.get('filter');
            const radio = formData.get('radio');
            onFilter({
                text,
                radio
            });
        });

        form.reset();
        document.activeElement.blur();

        return form;
    }
    renderTemplate() {
        return /*html*/ `
            <form id="filter">
                <label id="text-filter">Filter: 
                    <input name="filter" type="text">
                </label>
                <label>All
                    <input name="radio" type="radio" value="all" checked>
                </label>
                <label>Completed
                    <input name="radio" type="radio" value="completed">
                </label>
                <label>Not Done
                    <input name="radio" type="radio" value="not-done">
                </label>
            </form>
        `;
    }
}

export default Filter;