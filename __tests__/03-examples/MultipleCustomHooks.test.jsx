import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';

describe('MultipleCustomHook Tests', () => {
	test('should show default component', () => {
		render(<MultipleCustomHooks />);

		expect(screen.getByText('Loading...')).toBeTruthy();
		expect(screen.getByText('Breaking bad quotes')).toBeTruthy();

		const nextButton = screen.getByRole('button', { name: 'Next Quote' });
		expect(nextButton.disabled).toBeTruthy();
	});
});
