import { useState } from 'react'
import './Todo.css'
import TodoList from './TodoList'
import InputField from './InputField'
import { fetchTodos } from 'redux/todoSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Todo = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchTodos())

        }, 500)
    }, [dispatch])

    const [title, setText] = useState('')

    const {status, error} = useSelector((state) => state.todos)

    return (
        <div className="Todo">
            <InputField title={title}  setText={setText} />

            {status === 'loading...' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <TodoList />
        </div>
    )
}
export default Todo


