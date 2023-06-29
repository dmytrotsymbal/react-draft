import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home/Home'

type Props = {}

function App(props: Props) {
    return (
        <>
            <CssBaseline />
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App
