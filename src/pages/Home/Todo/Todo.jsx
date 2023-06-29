import { useState } from 'react'
import './Todo.css'
import TodoList from './TodoList'
import InputField from './InputField'



const Todo = (props) => {



    const [title, setText] = useState('')



    return (
        <div className="Todo">
            <InputField title={title}  setText={setText} />
            <TodoList />
        </div>
    )
}
export default Todo

