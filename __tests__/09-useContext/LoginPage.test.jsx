import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

const handleLoginUserMock = jest.fn();

describe('LoginPage Tests', () => {
	test('should call handleLoginUser', () => {
		render(
			<UserContext.Provider value={{ user: null, handleLoginUser: handleLoginUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const loginButton = screen.getByRole('button', { name: 'Set User' });
		fireEvent.click(loginButton);

		expect(handleLoginUserMock).toHaveBeenCalled();
	});
});
