import TodoListItem from './TodoListItem'
import { useAppSelector } from 'redux/hooks'
import { selectTodosByFilter } from 'redux/selectors'

const TodoList = () => {
    const todos = useAppSelector(selectTodosByFilter)
    return (
        <>
            <ol className="TodoList">
                {todos.map((todo: any) => (
                    <TodoListItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                ))}
            </ol>
        </>
    )
}
export default TodoList
