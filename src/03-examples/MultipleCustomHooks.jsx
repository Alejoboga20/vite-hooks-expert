import { LoadingQuote, Quote } from '../components';
import { useCounter, useFetch } from '../hooks';

export const MultipleCustomHooks = () => {
	const { counter, increment, decrement } = useCounter(1);
	const { isLoading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const { quote, author } = !!data && data[0];

	return (
		<>
			<h1>Breaking bad quotes</h1>
			<hr />

			{isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

			<button className='btn btn-secondary' onClick={() => decrement(1)}>
				Previous Quote
			</button>
			<button disabled={isLoading} className='btn btn-primary' onClick={() => increment(1)}>
				Next Quote
			</button>
		</>
	);
};
