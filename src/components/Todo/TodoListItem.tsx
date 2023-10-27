import { useAppDispatch } from 'redux/hooks'
import { deleteTodo, toggleTodoComplet } from 'redux/todoSlice'

type Props = {
    id: number
    title: string
    completed: boolean
    index: number
}

const TodoListItem = ({ id, title, completed, index }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <li className="TodoListItem" style={{ zIndex: -index }}>
            <input
                className="todoCheckbox"
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodoComplet(id))}
            />
            <span>{title}</span>
            <button
                onClick={() => dispatch(deleteTodo(id))}
                className="deleteBtn"
            >
                &times;
            </button>
        </li>
    )
}
export default TodoListItem
