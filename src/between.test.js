const { it } = require('@jest/globals');
const assert = require('assert').strict;
const { between } = require('./between');

it('should extract email between <>', () => {
  //  Подготовка
  const line = 'fucking <king@king.com>';
  const expected = 'king@king.com';
  // Действие
  const email = between(line, '<>');
  // Сверка
  assert.equal(email, expected);
});

it('should return empty string because no symbols at string', () => {
  const line = 'fucking email is king@king.com';
  const expected = '';

  const email = between(line, '<>');

  assert.equal(email, expected);
});

it('should return empty string because no substrings between quotes', () => {
  const line = 'fucking email is <>';
  const expected = '';

  const email = between(line, '<>');

  assert.equal(email, expected);
});
