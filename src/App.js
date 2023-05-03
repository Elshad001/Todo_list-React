import React from 'react';
import './App.css'
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	return (
		<div className='todo-app'>
			<h1 className='todo-app-title'>Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;