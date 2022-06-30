import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const [counter, increment, decrement] = useCounter(1);
	const { isLoading, data, hasError } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);
	const { quote, author } = !!data && data[0];

	return (
		<>
			<h1>Breaking bad quotes</h1>
			<hr />

			{isLoading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className='mb-2'>{quote}</p>
					<footer className='blockquote-footer mt-1'>{author}</footer>
				</blockquote>
			)}

			<button className='btn btn-secondary' onClick={() => decrement(1)}>
				Previous Quote
			</button>
			<button className='btn btn-primary' onClick={() => increment(1)}>
				Next Quote
			</button>
		</>
	);
};
