import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

const initialCount = 10;

describe('useCounter Tests', () => {
	test('should return default values', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, increment, decrement, reset } = result.current;

		expect(counter).toBe(0);
		expect(increment).toEqual(expect.any(Function));
		expect(decrement).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});

	test('should return initialCount', () => {
		const { result } = renderHook(() => useCounter(initialCount));
		const { counter } = result.current;

		expect(counter).toBe(initialCount);
	});

	test('should increment by 10', async () => {
		const { result } = renderHook(() => useCounter(initialCount));
		const { increment } = result.current;

		act(() => increment(10));

		const { counter } = result.current;
		expect(counter).toBe(initialCount + 10);
	});

	test('should decrement by 1', async () => {
		const { result } = renderHook(() => useCounter(initialCount));
		const { decrement } = result.current;

		act(() => decrement(1));

		const { counter } = result.current;
		expect(counter).toBe(initialCount - 1);
	});

	test('should reset', () => {
		const { result } = renderHook(() => useCounter(10));
		const { increment, reset } = result.current;

		act(() => increment(10));
		act(() => reset());

		expect(result.current.counter).toBe(10);
	});
});
