const { randomUUID } = require('crypto');
const { it, describe, expect } = require('@jest/globals');
const { isExportDeclaration } = require('typescript');
const { TodoList } = require('./todo');

jest.mock('crypto');
const mockID = '0000000-0000-0000-0000-000000000000';

describe('TodoList', () => {
  describe('addItem', () => {
    it('should add first element', () => {
      const list = new TodoList(['firstTask', 'secondTask']);

      list.addItem({ name: 'thirdTask' });

      expect(list.items).toHaveLength(3);
    });
  });

  describe('load', () => {
    it('should load', async () => {
      randomUUID.mockImplementation(() => mockID);

      const list = new TodoList();

      list.request = () => {
        return Promise.resolve(['item1', 'item2', 'item3']);
      };

      await list.load();

      expect(list.items).toEqual([
        { id: mockID, name: 'item1', isDone: false },
        { id: mockID, name: 'item2', isDone: false },
        { id: mockID, name: 'item3', isDone: false },
      ]);
    });
  });
});
