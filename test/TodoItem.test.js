import TodoItem from '../src/components/TodoItem.js';
const test = QUnit.test;

QUnit.module('TodoItem');

test('generate list item html', assert => {
    // Arrange
    const todo = {
        task: 'Go for a walk in the forest',
        completed: true
    };
    let checked = '';
    if(todo.completed) {
        checked = ' ' + 'checked';
    }
    const expected = /*html*/ `
        <li>
            <label>
                ${todo.task}
                <input type="checkbox" name="todo"${checked}>
            </label>
        </li>
    `;
    // Act

    const todoItemComponent = new TodoItem({ todo });
    const html = todoItemComponent.renderTemplate();

    // Assert
    assert.htmlEqual(html, expected);
});