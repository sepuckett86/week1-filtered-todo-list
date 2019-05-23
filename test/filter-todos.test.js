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
        text: 'Eat'
    };
    const expected = [{
        task: 'Eat lunch',
        completed: true
    }];
    // Act
    const actual = filterTodos(filter);

    // Assert
    assert.equal(actual, expected);
});