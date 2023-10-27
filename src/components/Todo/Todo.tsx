import { useState } from 'react'
import '../../styles/Todo.scss'
import TodoList from './TodoList'
import InputField from './InputField'
import TotalTodo from './TotalTodo'
import ThemeChange from './ThemeChange'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const Todo = (props: Props) => {
    const [title, setText] = useState('')

    const theme = useAppSelector((state) => state.theme.theme)

    return (
        <div className="Todo" id={theme}>
            {/* <ThemeChange /> */}
            <InputField title={title} setText={setText} />
            <TodoList />
            {/* <TotalTodo /> */}
        </div>
    )
}
export default Todo
