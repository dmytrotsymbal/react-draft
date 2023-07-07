import { Switch } from '@mui/material'
import { useAppDispatch } from 'redux/hooks'
import { toggleTheme } from 'redux/themeSlice'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

type Props = {}
const ThemeChange = (props: Props) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <Switch onChange={() => dispatch(toggleTheme())} {...label} />
        </div>
    )
}
export default ThemeChange
