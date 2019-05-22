import TodoItem from '../src/components/TodoItem.js';
const test = QUnit.test;

QUnit.module('TodoItem');

test('generate list item html with checked', assert => {
    // Arrange
    const todo = {
        task: 'Go for a walk in the forest',
        completed: true
    };
    
    const expected = /*html*/ `
        <li>
            <label>
                ${todo.task}
                <input type="checkbox" name="todo" checked>
            </label>
        </li>
    `;
    // Act

    const todoItemComponent = new TodoItem({ todo });
    const html = todoItemComponent.renderTemplate();

    // Assert
    assert.htmlEqual(html, expected);
});

test('generate list item html without checked', assert => {
    // Arrange
    const todo = {
        task: 'Go for a walk in the forest',
        completed: false
    };
    const expected = /*html*/ `
        <li>
            <label>
                ${todo.task}
                <input type="checkbox" name="todo">
            </label>
        </li>
    `;
    // Act

    const todoItemComponent = new TodoItem({ todo });
    const html = todoItemComponent.renderTemplate();

    // Assert
    assert.htmlEqual(html, expected);
});