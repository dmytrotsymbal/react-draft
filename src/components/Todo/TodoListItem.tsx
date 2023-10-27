import { useAppDispatch } from 'redux/hooks'
import { deleteTodo, toggleTodoComplet } from 'redux/todoSlice'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
    id: number
    title: string
    completed: boolean
    index: number
}

const TodoListItem = ({ id, title, completed, index }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <li
            className={completed ? 'TodoListItem_Completed' : 'TodoListItem'}
            style={{ zIndex: -index }}
        >
            <input
                className="TodoCheckbox"
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodoComplet(id))}
            />
            <span>{title}</span>
            <button
                onClick={() => dispatch(deleteTodo(id))}
                className="DeleteBtn"
            >
                <CloseIcon sx={{ width: '13px' }} />
            </button>
        </li>
    )
}
export default TodoListItem
