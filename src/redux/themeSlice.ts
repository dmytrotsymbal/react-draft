import { createSlice } from '@reduxjs/toolkit'

type TodoTheme = {
    theme: string
}

const initialState: TodoTheme = {
    theme: 'light',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        darkTheme: (state) => {
            state.theme = 'dark'
        },
        lightTheme: (state) => {
            state.theme = 'light'
        },
    },
})

export const { darkTheme, lightTheme } = themeSlice.actions

export default themeSlice.reducer
