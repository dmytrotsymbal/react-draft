import { addNewTodo } from 'redux/todoSlice'
import { useAppDispatch } from 'redux/hooks'

type Props = {
    setText: (text: string) => void
    title: string
}
const InputField = ({ title, setText }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <label>
            <input
                type="text"
                value={title}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(addNewTodo(title))
                    setText('')
                }}
            >
                Add
            </button>
        </label>
    )
}
export default InputField
