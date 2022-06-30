import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
	const pRef = useRef();
	const [quoteSize, setQuoteSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();
		setQuoteSize({ width, height });
	}, []);

	return (
		<>
			<blockquote
				className='blockquote text-end'
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<p className='mb-2' ref={pRef}>
					{quote}
				</p>
				<footer className='blockquote-footer mt-1'>{author}</footer>
			</blockquote>

			<code>{JSON.stringify(quoteSize)}</code>
		</>
	);
};
