import { todoReducer } from '../../src/08-useReducer/todoReducer';

const initialState = [
	{
		id: 1,
		description: 'initial todo',
		done: false,
	},
];

const addTodoAction = {
	type: '[TODO] - addTodo',
	payload: {
		id: 2,
		description: 'added todo',
		done: false,
	},
};

const deleteTodoAction = {
	type: '[TODO] - removeTodo',
	payload: 1,
};

const toggleTodoAction = {
	type: '[TODO] - toggleTodo',
	payload: 1,
};

describe('todoReducer Tests', () => {
	test('should return initialState', () => {
		const state = todoReducer(initialState, {});
		expect(state).toBe(initialState);
	});

	test('should add todo', () => {
		const state = todoReducer(initialState, addTodoAction);
		expect(state.length).toBe(2);
		expect(state).toContain(addTodoAction.payload);
	});

	test('should remove todo', () => {
		const state = todoReducer(initialState, deleteTodoAction);
		expect(state.length).toBe(0);
	});

	test('should toggle todo', () => {
		const state = todoReducer(initialState, toggleTodoAction);
		expect(state[0].done).toBe(true);
	});
});
