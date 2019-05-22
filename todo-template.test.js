import todoTemplate from '../src/todo-template.js';

const test = QUnit.test;

QUnit.module('todo template');

test('makes html for to-do with checked', assert => {
    // Arrange
    const todo = {
        task: 'Go for a walk in the forest',
        completed: true
    };
    const expected = /*html*/`
        <li>
            <label>
                Go for a walk in the forest
                <input type="checkbox" name="todo" checked>
            </label>
        </li>
    `;
    // Act
    const html = todoTemplate(todo);
    // Assert
    assert.htmlEqual(html, expected);
});

test('makes html for to-do without checked', assert => {
    // Arrange
    const todo = {
        task: 'Go for a walk in the forest',
        completed: false
    };
    const expected = /*html*/`
        <li>
            <label>
                Go for a walk in the forest
                <input type="checkbox" name="todo">
            </label>
        </li>
    `;
    // Act
    const html = todoTemplate(todo);
    // Assert
    assert.htmlEqual(html, expected);
});