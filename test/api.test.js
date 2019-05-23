import api from '../src/services/api.js';

const test = QUnit.test;

QUnit.module('api');

test('round trip of todos data', assert => {
    // Arrange
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
    const expected = todos;
    // Act
    api.saveTodos(todos);
    const actual = api.getTodos();
    // Assert
    assert.deepEqual(actual, expected);
});