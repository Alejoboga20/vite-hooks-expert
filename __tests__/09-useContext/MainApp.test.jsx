import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('MainApp Test', () => {
	test('should show Home Page', () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('HomePage')).toBeTruthy();
	});

	test('should show Login Page', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);

		const loginAnchor = screen.getByRole('link', { name: 'Login' });

		expect(loginAnchor.className).toContain('active');
		expect(screen.getByText('LoginPage')).toBeTruthy();
	});
});
