import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
	const { handleLoginUser } = useContext(UserContext);

	return (
		<>
			<h1>LoginPage</h1>
			<hr />

			<button className='btn btn-primary' onClick={handleLoginUser}>
				Set User
			</button>
		</>
	);
};
