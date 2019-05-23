function filterTodos(filter, todos) {
    Object.keys(filter).forEach(key => {
        filter[key] = filter[key].toLowerCase();
    });
    const filteredTodos = todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasText = lowerCaseTask.includes(filter.text);
        return hasText;
    });
    return filteredTodos;
}

export default filterTodos;