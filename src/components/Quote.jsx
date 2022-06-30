export const Quote = ({ quote, author }) => {
	return (
		<blockquote className='blockquote text-end'>
			<p className='mb-2'>{quote}</p>
			<footer className='blockquote-footer mt-1'>{author}</footer>
		</blockquote>
	);
};
