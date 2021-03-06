export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case '[TODO] - addTodo':
			return [...state, action.payload];

		case '[TODO] - removeTodo':
			return state.filter((todo) => todo.id !== action.payload);

		case '[TODO] - toggleTodo':
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo
			);

		default:
			return state;
	}
};
