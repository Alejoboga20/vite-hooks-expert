import React, { useEffect, useState } from 'react';

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

	useEffect(() => {}, []);

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
