const api = {
    saveTodos(todos) {
        const json = JSON.stringify(todos);
        localStorage.setItem('todos', json);
    },
    getTodos() {
        const json = localStorage.getItem('todos');
        const todos = JSON.parse(json);
        return todos;
    }
};

export default api;