import { IconButton } from '@mui/material'
import { useAppDispatch } from 'redux/hooks'
import { darkTheme, lightTheme } from 'redux/themeSlice'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import '../../styles/ThemeChange.scss'

type Props = {}
const ThemeChange = (props: Props) => {
    const dispatch = useAppDispatch()

    return (
        <div className="ThemeChange">
            <IconButton onClick={() => dispatch(darkTheme())}>
                <DarkModeIcon />
            </IconButton>
            <IconButton onClick={() => dispatch(lightTheme())}>
                <LightModeIcon />
            </IconButton>
        </div>
    )
}
export default ThemeChange
