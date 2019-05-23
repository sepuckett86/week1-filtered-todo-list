import filterTodos from '../src/filter-todos.js';

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

test('returns todos containing filter text', assert => {
    // Arrange
    const filter = {
        text: 'Eat',
        radio: 'all'
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

test('no string plus all radio returns all', assert => {
    // Arrange
    const filter = {
        text: '',
        radio: 'all'
    };
    const expected = [
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
    // Act
    const actual = filterTodos(filter, todos);

    // Assert
    assert.deepEqual(actual, expected);
});

test('no case sensitivity for filter', assert => {
    // Arrange
    const filter = {
        text: 'eAT',
        radio: 'all'
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

test('not done returns not completed', assert => {
    // Arrange
    const filter = {
        text: '',
        radio: 'not-done'
    };
    const expected = [
        {
            task: 'Compose a song',
            completed: false
        }
    ];
    // Act
    const actual = filterTodos(filter, todos);

    // Assert
    assert.deepEqual(actual, expected);
});

test('completed returns completed', assert => {
    // Arrange
    const filter = {
        text: '',
        radio: 'completed'
    };
    const expected = [
        {
            task: 'Go for a walk in the forest',
            completed: true
        },
        {
            task: 'Eat lunch',
            completed: true
        }
    ];
    // Act
    const actual = filterTodos(filter, todos);

    // Assert
    assert.deepEqual(actual, expected);
});

test('combo filter', assert => {
    // Arrange
    const filter = {
        text: 'Go',
        radio: 'completed'
    };
    const expected = [
        {
            task: 'Go for a walk in the forest',
            completed: true
        }
    ];
    // Act
    const actual = filterTodos(filter, todos);

    // Assert
    assert.deepEqual(actual, expected);
});