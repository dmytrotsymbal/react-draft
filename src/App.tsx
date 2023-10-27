import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Todo from 'components/Todo/Todo'

type Props = {}

function App(props: Props) {
    return (
        <>
            <CssBaseline />
            <Todo />
        </>
    )
}

export default App
