import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
	{
		id: new Date().getTime(),
		todo: 'Gather Infinity Stones',
		done: false,
	},
	{
		id: new Date().getTime() + 100,
		todo: 'Find Soul Stone',
		done: false,
	},
];

export const TodoApp = () => {
	const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

	return (
		<>
			<h1>TodoApp</h1>
			<hr />
			<ul>
				<li>Item1</li>
				<li>Item2</li>
				<li>Item3</li>
			</ul>
		</>
	);
};
