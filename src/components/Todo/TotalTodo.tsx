import { useAppSelector } from 'redux/hooks'

type Props = {}
const TotalTodo = (props: Props) => {
    const todos = useAppSelector((state) => state.todos.todos)
    return (
        <>
            <h4 className="TotalTodo">Total todo: {todos.length}</h4>
        </>
    )
}
export default TotalTodo
