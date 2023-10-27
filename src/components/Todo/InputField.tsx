import { addTodo } from 'redux/todoSlice'
import { useAppDispatch } from 'redux/hooks'
import { useState } from 'react'
import '../../styles/InputField.scss'
import ErrorMessage from 'components/ErrorMessage'

type Props = {
    title: string
    setText: (text: string) => void
}

const InputField = ({ title, setText }: Props) => {
    const dispatch = useAppDispatch()
    const [isError, setIsError] = useState<boolean>(false)

    const handleAddTodo = () => {
        if (title.trim() === '') {
            setIsError(true)
        } else {
            dispatch(addTodo(title))
            setText('')
            setIsError(false)
        }
    }

    return (
        <>
            {isError && <ErrorMessage setIsError={setIsError} />}
            <label className="InputField">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter new todo"
                />
                <button onClick={handleAddTodo}>Add</button>
            </label>
        </>
    )
}

export default InputField
