import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodoComplet } from "redux/todoSlice"
const TodoListItem = ({
    id,
    text,
    completed,
}) => {

    const dispatch = useDispatch()

    return (
        <li className="TodoListItem" key={id}>
            <input
                className="todoCheckbox"
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodoComplet({ id }))}
            />
            <span>{text}</span>
            <button onClick={() => dispatch(deleteTodo({id}))} className="deleteBtn">
                &times;
            </button>
        </li>
    )
}
export default TodoListItem
