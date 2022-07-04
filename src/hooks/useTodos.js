import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const stateInitilizer = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
	const [todos, dispatchTodo] = useReducer(todoReducer, initialState, stateInitilizer);

	const handleNewTodo = (todo) => {
		const addTodoAction = {
			type: '[TODO] - addTodo',
			payload: todo,
		};

		dispatchTodo(addTodoAction);
	};

	const handleDeleteTodo = (id) => {
		const deleteTodoAction = {
			type: '[TODO] - removeTodo',
			payload: id,
		};

		dispatchTodo(deleteTodoAction);
	};

	const handleToggleTodo = (id) => {
		const toggleTodoAction = {
			type: '[TODO] - toggleTodo',
			payload: id,
		};

		dispatchTodo(toggleTodoAction);
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return {
		todos,
		todosCount: todos.length,
		pendingTodos: todos.filter((todo) => todo.done === false).length,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	};
};
