import { useEffect, useState } from 'react';
import { Message } from './Message';

const existingUser = 'strider';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
	});

	const { username, email } = formState;

	const onInputChange = ({ target: { name, value } }) => {
		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		// console.log('formState changed');
	}, [formState]);

	useEffect(() => {
		// console.log('email changed');
	}, [email]);

	return (
		<>
			<h1>SimpleForm</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

			{username === existingUser && <Message />}

			<input
				type='email'
				className='form-control mt-2'
				placeholder='emal@email.com'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
		</>
	);
};
