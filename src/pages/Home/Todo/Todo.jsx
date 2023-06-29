import { useState } from 'react'
import './Todo.css'
import TodoList from './TodoList'
import InputField from './InputField'


const Todo = (props) => {

    const [text, setText] = useState('')

    return (
        <div className="Todo">
            <InputField text={text}  setText={setText} />

            <TodoList />
        </div>
    )
}
export default Todo


