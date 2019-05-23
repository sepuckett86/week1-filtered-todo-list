const test = QUnit.test;

QUnit.module('filter-todos');

const todos = [
    {
        task: 'Go for a walk in the forest',
        completed: true
    },
    {
        task: 'Compose a song',
        completed: false
    },
    {
        task: 'Eat lunch',
        completed: true
    }
];

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

test('returns todos containing filter text', assert => {
    // Arrange
    const filter = {
        text: 'Eat'
    };
    const expected = [{
        task: 'Eat lunch',
        completed: true
    }];
    // Act
    const actual = filterTodos(filter, todos);

    // Assert
    assert.deepEqual(actual, expected);
});

test('no case sensitivity for filter', assert => {
    // Arrange
    const filter = {
        text: 'eAT'
    };
    const expected = [{
        task: 'Eat lunch',
        completed: true
    }];
    // Act
    const actual = filterTodos(filter, todos);

    // Assert
    assert.deepEqual(actual, expected);
});