import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('HomePage Tests', () => {
	test('should show component with no user', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null');
	});

	test('should show component with user', () => {
		render(
			<UserContext.Provider
				value={{
					user: {
						id: 1,
						name: 'testUser',
					},
				}}
			>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toContain('testUser');
	});
});
