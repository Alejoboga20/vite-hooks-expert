import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

const todo = {
	id: 1,
	description: 'Gather destiny stones',
	done: false,
};

const onDeleteTodoMock = jest.fn();
const onToggleTodoMock = jest.fn();

describe('TodoItem tests', () => {
	beforeEach(() => jest.clearAllMocks());

	test('should show pending todo', () => {
		render(
			<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
		);
		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('align-self-center');
		expect(spanElement.className).not.toContain('text-decoration-line-through');
		expect(screen.getByText('Gather destiny stones')).toBeTruthy();
	});

	test('should show complete todo', () => {
		todo.done = true;

		render(
			<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
		);

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('text-decoration-line-through');
	});

	test('should call onToggleTodo', () => {
		render(
			<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
		);

		const spanElement = screen.getByLabelText('span');

		fireEvent.click(spanElement);

		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test('should call onToggleTodo', () => {
		render(
			<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
		);

		const deleteButton = screen.getByRole('button');

		fireEvent.click(deleteButton);

		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
