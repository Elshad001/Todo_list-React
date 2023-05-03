import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delTodo ,isCompleted,isEdit,isUpdate} from '../todoSlice';
import {FiDelete} from 'react-icons/fi'
import {MdEditNote} from 'react-icons/md'

const TodoItem = ({ id, title , completed,isEditing}) => {

	const [editValue, setEditValue] = useState('');
	const dispatch = useDispatch();

	const handleDeleteClick = () => {
		dispatch(delTodo({ id }));
	};

	const handleCompleted = () => {
		dispatch(isCompleted({id:id,completed:!completed}));
	};

	const handleEdit = () => {
		dispatch(isEdit({id:id,isEditing:!isEditing}));
	};

	const handleUpdate = () => {
		dispatch(isUpdate({id:id,isEditing:!isEditing,title:editValue}));
	};

   console.log(completed)
	return (
		<li >
			{

				isEditing===false ?
				(
					<div className='todo'>
				
					
					
					<span>
						<input
							type='checkbox'
							checked={completed}
							onChange={handleCompleted}
						/>
						<p  className={completed===false ? 'todo-title': 'todo-title-edit'}>{title}</p>
					</span>
				
			<MdEditNote className='edit-icon' onClick={handleEdit}/>
			<FiDelete  onClick={handleDeleteClick} className='del-icon'/>
		</div>)
		:
		(
			<div className='todo'>
		
			<span>
				<input
					type='checkbox'
					checked={completed}
					onChange={handleCompleted}
				/>
					<input
					type='text'
					className='update-imp'
					placeholder='Update your todo...'
					value={editValue}
					onChange={(event) => setEditValue(event.target.value)}
				/>
			</span>
			<button className='update-btn' onClick={handleUpdate}>Update</button>
</div>)


			}
			
			
		
		</li>
	);
};

export default TodoItem;