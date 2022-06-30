import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const { isLoading, data, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<h1>Breaking bad quotes</h1>
			<hr />
		</>
	);
};

//https://www.breakingbadapi.com/api/quotes/1
