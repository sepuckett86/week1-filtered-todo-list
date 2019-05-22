import headerTemplate from '../src/header-template.js';

const test = QUnit.test;

QUnit.module('header template');

test('makes html for header', assert => {
    // Arrange
    const expected = /*html*/`
        <h1>To Do List</h1>
    `;
    // Act
    const html = headerTemplate();

    // Assert
    assert.htmlEqual(html, expected);
});