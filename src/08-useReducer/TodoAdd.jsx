import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({ description: '' });

	const handleOnSubmit = (event) => {
		event.preventDefault();

		if (description.trim().length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			done: false,
			description,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<input
				type='text'
				placeholder='what to do?'
				className='form-control'
				name='description'
				value={description}
				onChange={onInputChange}
			/>
			<button type='submit' className='btn btn-outline-primary mt-2'>
				Add
			</button>
		</form>
	);
};
