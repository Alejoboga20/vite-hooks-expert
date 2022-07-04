import { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [];

const stateInitilizer = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
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

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<h1>
				TodoApp: (10) <small>Pending: (2)</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
				</div>

				<div className='col-5'>
					<h4>Add Todo</h4>
					<hr />
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
