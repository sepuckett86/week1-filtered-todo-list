function filterTodos(filter, todos) {
    Object.keys(filter).forEach(key => {
        filter[key] = filter[key].toLowerCase();
    });
    const radio = filter.radio;
    const filteredTextTodos = todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasText = lowerCaseTask.includes(filter.text);
        return hasText;
    });
    const filteredRadioTodos = filteredTextTodos.filter(todo => {
        if(radio === 'all') {
            return true;
        } else if(radio === 'completed') {
            return todo.completed;
        } else if(radio === 'not-done'){
            return !todo.completed;
        }
    });
    return filteredRadioTodos;
}

export default filterTodos;