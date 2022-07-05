import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks/useForm';

const initialForm = {
	name: 'TestName',
	email: 'test@email.com',
};

describe('useForm tests', () => {
	test('should return default values', () => {
		const { result } = renderHook(() => useForm(initialForm));
		expect(result.current).toEqual({
			name: initialForm.name,
			email: initialForm.email,
			formState: initialForm,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	test('should change name in form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange } = result.current;

		act(() => {
			onInputChange({ target: { name: 'name', value: 'changingName' } });
		});

		const { name } = result.current;
		expect(name).toBe('changingName');
	});

	test('should reset form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { formState, onInputChange, onResetForm } = result.current;

		act(() => {
			onInputChange({ target: { name: 'name', value: 'changingName' } });
			onResetForm();
		});

		expect(formState).toEqual(initialForm);
	});
});
