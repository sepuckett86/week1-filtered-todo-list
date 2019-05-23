const api = {
    storage: localStorage,
    saveTodos(todos) {
        const json = JSON.stringify(todos);
        api.storage.setItem('todos', json);
    },
    getTodos() {
        const json = api.storage.getItem('todos');
        const todos = JSON.parse(json);
        return todos;
    }
};

export default api;