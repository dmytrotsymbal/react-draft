import TodoListItem from './TodoListItem'
import { useAppSelector } from 'redux/hooks'

const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.todos)

    return (
        <ol className="TodoList">
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                />
            ))}
        </ol>
    )
}
export default TodoList
