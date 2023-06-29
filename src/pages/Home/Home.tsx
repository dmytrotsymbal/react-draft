import { Container } from '@mui/material'
import Todo from './Todo/Todo'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Container>
                <Todo />
            </Container>
        </>
    )
}
export default Home
