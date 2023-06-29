import { addTodo } from "redux/todoSlice"
import { useDispatch } from 'react-redux'
const InputField = ({ text, setText }) => {


    const dispatch = useDispatch()

    return (
        <label>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                dispatch(addTodo({text})); setText('')
            }}>Add</button>
        </label>
    )
}
export default InputField
