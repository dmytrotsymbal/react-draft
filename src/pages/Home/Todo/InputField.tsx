import { addTodo } from 'redux/todoSlice'
import { useAppDispatch } from 'redux/hooks'

type Props = {
    title: string
    setText: (text: string) => void
}
const InputField = ({ title, setText }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <label className="InputField">
            <input
                type="text"
                value={title}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(title))
                    setText('')
                }}
            >
                Add
            </button>
        </label>
    )
}
export default InputField
