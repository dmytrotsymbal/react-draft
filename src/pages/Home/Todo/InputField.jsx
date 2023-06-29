import { addTodo } from "redux/todoSlice"
import { useDispatch } from 'react-redux'
const InputField = ({ title, setText }) => {


    const dispatch = useDispatch()

    return (
        <label>
            <input
                type="text"
                value={title}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                dispatch(addTodo({title})); setText('')
            }}>Add</button>
        </label>
    )
}
export default InputField
