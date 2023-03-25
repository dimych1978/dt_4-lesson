const { it, expect, describe } = require('@jest/globals');
const { between } = require('./between');

describe('between()', ()=> {it('should extract email between <>', () => {
  //  Подготовка
  const line = 'fucking <king@king.com>';
  const expected = 'king@king.com';
  // Действие
  const email = between(line, '<>');
  // Сверка
  expect(expected).toBe(email);
});

it('should return empty string because no symbols at string', () => {
  const line = 'fucking email is king@king.com';
  const expected = '';

  const email = between(line, '<>');

  expect(expected).toBe(email);
});

it('should return empty string because no substrings between quotes', () => {
  const line = 'fucking email is <>';
  const expected = '';

  const email = between(line, '<>');

  expect(expected).toBe(email);
});
})

