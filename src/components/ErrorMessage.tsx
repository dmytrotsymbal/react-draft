import '../styles/ErrorMessage.scss'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
    setIsError: (isError: boolean) => void
}
const ErrorMessage = ({ setIsError }: Props) => {
    return (
        <div className="ErrorMessageBackground">
            <div className="ErrorMessage">
                <button className="CloseBtn" onClick={() => setIsError(false)}>
                    <CloseIcon sx={{ width: '13px' }} />
                </button>
                <h4>You need to enter something</h4>
            </div>
        </div>
    )
}
export default ErrorMessage
