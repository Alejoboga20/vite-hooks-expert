import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('TodoApp tests', () => {
	test('should properly render', () => {
		useTodos.mockReturnValue({
			todos: [
				{
					id: 1,
					description: 'First Todo',
					done: true,
				},
				{
					id: 2,
					description: 'Second Todo',
					done: false,
				},
			],
			todosCount: 2,
			pendingTodos: 1,
			handleNewTodo: jest.fn(),
			handleDeleteTodo: jest.fn(),
			handleToggleTodo: jest.fn(),
		});

		render(<TodoApp />);
		expect(screen.getByText('First Todo')).toBeTruthy();
		expect(screen.getByText('Second Todo')).toBeTruthy();
	});
});
