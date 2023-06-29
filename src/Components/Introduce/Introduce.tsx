import logo from './logo.svg'
import './Introduce.css'
import { useState } from 'react'
type Props = {}
const Introduce = (props: Props) => {
    const [word, setWord] = useState<string>('K21-R8')

    const changeWordToLoh = () => {
        setWord('X33-J5')
    }

    const changeWordToSpace = () => {
        setWord('K21-R8')
    }

    const [number, setNumber] = useState<number>(1)

    const onIncrement = () => {
        setNumber(number + 1)
    }

    const onDecrement = () => {
        setNumber(number - 1)
    }
    return (
        <div className="Introduce">
            <div className="animation">
                <div className="flexContainer">
                    <button disabled={number <= 0} onClick={onDecrement}>
                        -
                    </button>
                    <h3 style={{ color: 'white' }}>
                        Number :{' '}
                        <span
                            className={number % 2 === 0 ? 'yellow' : 'purple'}
                        >
                            {number}
                        </span>
                    </h3>
                    <button onClick={onIncrement}>+</button>
                </div>

                <h3 className="IntroduceTitle">SPA {word}</h3>
                <button
                    onClick={
                        word === 'K21-R8' ? changeWordToLoh : changeWordToSpace
                    }
                >
                    change word
                </button>
                <img src={logo} className="Introduce-logo" alt="logo" />
            </div>
        </div>
    )
}
export default Introduce
