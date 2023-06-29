import TodoListItem from './TodoListItem'
import {useSelector} from 'react-redux'

const TodoList = () => {

    const todos = useSelector((state) => state.todos.todos)

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
