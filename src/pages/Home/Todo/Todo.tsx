import { useState } from 'react'
import './Todo.css'
import TodoList from './TodoList'
import InputField from './InputField'
import { fetchTodos } from 'redux/todoSlice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

type Props = {}

const Todo = (props: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const [text, setText] = useState('')

    const { loading, error } = useAppSelector((state) => state.todos)

    return (
        <div className="Todo">
            <InputField title={text} setText={setText} />

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <TodoList />
        </div>
    )
}
export default Todo
