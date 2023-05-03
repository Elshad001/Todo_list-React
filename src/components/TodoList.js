import TodoItem from './TodoItem';
import { useSelector} from 'react-redux';

const TodoList = () => {
	// const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	
	return (
		<div className='todo-list'>
			<ul>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} isEditing={todo.isEditing} key={todo.id} />
			))}
		</ul>
		</div>
	);
};

export default TodoList;