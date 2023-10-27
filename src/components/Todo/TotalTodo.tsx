import { useAppSelector } from 'redux/hooks'

type Props = {}
const TotalTodo = (props: Props) => {
    const todos = useAppSelector((state) => state.todos.todos)
    return (
        <>
            <p style={{ textAlign: 'center', textDecoration: 'underline' }}>
                Total todo: {todos.length}
            </p>
        </>
    )
}
export default TotalTodo
