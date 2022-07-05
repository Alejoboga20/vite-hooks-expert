import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

const mockIncrement = jest.fn();

describe('MultipleCustomHook Tests', () => {
	beforeEach(() => {
		useCounter.mockReturnValue({ counter: 1, increment: mockIncrement });
	});

	test('should show default component', () => {
		useFetch.mockReturnValue({
			isLoading: true,
			data: null,
			hasError: null,
		});

		render(<MultipleCustomHooks />);

		expect(screen.getByText('Loading...')).toBeTruthy();
		expect(screen.getByText('Breaking bad quotes')).toBeTruthy();

		const nextButton = screen.getByRole('button', { name: 'Next Quote' });
		expect(nextButton.disabled).toBeTruthy();
	});

	test('should show a quote', () => {
		useFetch.mockReturnValue({
			isLoading: false,
			data: [{ author: 'Alejo', quote: 'Mocking fetch' }],
			hasError: null,
		});

		render(<MultipleCustomHooks />);
		expect(screen.getByText('Mocking fetch')).toBeTruthy();
		expect(screen.getByText('Alejo')).toBeTruthy();

		const nextButton = screen.getByRole('button', { name: 'Next Quote' });
		expect(nextButton.disabled).toBeFalsy();
	});

	test('should call increment', () => {
		useFetch.mockReturnValue({
			isLoading: false,
			data: [{ author: 'Alejo', quote: 'Mocking fetch' }],
			hasError: null,
		});

		render(<MultipleCustomHooks />);
		const nextButton = screen.getByRole('button', { name: 'Next Quote' });

		fireEvent.click(nextButton);
		expect(mockIncrement).toHaveBeenCalled();
	});
});
