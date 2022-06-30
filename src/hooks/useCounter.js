import { useState } from 'react';

export const useCounter = (initialCounter = 0) => {
	const [counter, setCounter] = useState(initialCounter);

	const increment = (value = 1) => {
		setCounter(counter + value);
	};

	const decrement = (value = 1) => {
		if (counter === initialCounter) return;
		setCounter(counter - value);
	};

	const reset = () => {
		setCounter(initialCounter);
	};

	return [counter, increment, decrement, reset];
};
