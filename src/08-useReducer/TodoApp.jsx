import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
	const { todos, todosCount, pendingTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
		useTodos();

	return (
		<>
			<h1>
				TodoApp: ({todosCount}) <small>Pending: ({pendingTodos})</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
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
