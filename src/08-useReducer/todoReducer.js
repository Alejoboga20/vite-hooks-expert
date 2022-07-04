export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case '[TODO] - addTodo':
			return [...state, action.payload];

		default:
			return [...state];
	}
};
