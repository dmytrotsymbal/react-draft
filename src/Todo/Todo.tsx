import { useState } from 'react'
import '../../styles/Todo.scss'
import TodoList from '../components/Todo/TodoList'
import InputField from '../components/Todo/InputField'
import TotalTodo from '../components/Todo/TotalTodo'
import ThemeChange from '../components/Todo/ThemeChange'
import { useAppSelector } from '../redux/hooks'

type Props = {}

const Todo = (props: Props) => {
    const [title, setText] = useState('')

    const theme = useAppSelector((state) => state.theme.theme)

    return (
        <div className="Todo" id={theme}>
            <ThemeChange />
            <InputField title={title} setText={setText} />
            <TodoList />
            <TotalTodo />
        </div>
    )
}
export default Todo
