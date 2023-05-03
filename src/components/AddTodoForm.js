import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo} from '../todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
		}
	};

	return (
		<div className='todo-form'>
			<form onSubmit={onSubmit} >
				<input
					type='text'
					className='todo-inp'
					placeholder='Add todo...'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<button type='submit' className='add-btn'>
					Add
				</button>
			</form>
		</div>
		
	);
};

export default AddTodoForm;