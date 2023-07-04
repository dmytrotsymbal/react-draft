import { useState } from 'react'
import './Todo.scss'
import TodoList from './TodoList'
import InputField from './InputField'

type Props = {}

const Todo = (props: Props) => {
    const [title, setText] = useState('')

    return (
        <div className="Todo">
            <InputField title={title} setText={setText} />
            <TodoList />
        </div>
    )
}
export default Todo
