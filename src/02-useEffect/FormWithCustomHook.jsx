import { useForm } from '../hooks/useForm';
import { Message } from './Message';

const existingUser = 'strider';

const initialForm = { username: '', email: '', password: '' };

export const FormWithCustomHook = () => {
	const { username, email, password, onInputChange, onResetForm } = useForm(initialForm);

	return (
		<>
			<h1>FormWithCustomHook</h1>
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

			<input
				type='password'
				className='form-control mt-2'
				placeholder='password'
				name='password'
				value={password}
				onChange={onInputChange}
			/>

			<button className='btn btn-primary mt-2' onClick={onResetForm}>
				Reset
			</button>
		</>
	);
};
