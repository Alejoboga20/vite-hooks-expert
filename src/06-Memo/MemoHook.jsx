import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log('Lets go!');
	}

	return `${iterationNumber} done`;
};

export const MemoHook = () => {
	const [show, setShow] = useState(true);
	const [counter, increment] = useCounter(10);

	const memoValue = useMemo(() => {
		heavyStuff(counter);
	}, [counter]);

	return (
		<>
			<h1>
				Counter: <small>{counter}</small>
			</h1>
			<hr />

			<h4>{memoValue}</h4>

			<button className='btn btn-primary' onClick={() => increment()}>
				+1
			</button>

			<button className='btn btn-outline-primary' onClick={() => setShow(!show)}>
				Show/hide {JSON.stringify(show)}
			</button>
		</>
	);
};
