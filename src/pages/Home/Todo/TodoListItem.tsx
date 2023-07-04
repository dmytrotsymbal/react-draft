import { useAppDispatch } from 'redux/hooks'
import { deleteAsyncTodo, toggleAsyncTodoComplete } from 'redux/todoSlice'

type Props = {
    id: number
    title: string
    completed: boolean
}
const TodoListItem = ({ id, title, completed }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <li className="TodoListItem" key={id}>
            <input
                className="todoCheckbox"
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleAsyncTodoComplete(id))}
            />
            <span>{title}</span>
            <button
                onClick={() => dispatch(deleteAsyncTodo(id))}
                className="deleteBtn"
            >
                &times;
            </button>
        </li>
    )
}
export default TodoListItem
