import TodoListItem from './TodoListItem'
import { useAppSelector } from 'redux/hooks'
import '../../styles/TodoList.scss'

const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.todos)
    return (
        <>
            <ol className="TodoList">
                {todos.map((todo: any, index) => (
                    <TodoListItem
                        key={index}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        index={index}
                    />
                ))}
            </ol>
        </>
    )
}
export default TodoList
