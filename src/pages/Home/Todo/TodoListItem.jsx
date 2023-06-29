import { useDispatch } from "react-redux"
import { deleteAsyncTodo, toggleAsyncTodoComplet } from "redux/todoSlice"
const TodoListItem = ({
    id,
    title,
    completed,
}) => {

    const dispatch = useDispatch()

    return (
        <li className="TodoListItem" key={id}>
            <input
                className="todoCheckbox"
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleAsyncTodoComplet( id ))}
            />
            <span>{title}</span>
            <button onClick={() => dispatch(deleteAsyncTodo(id))} className="deleteBtn">
                &times;
            </button>
        </li>
    )
}
export default TodoListItem
