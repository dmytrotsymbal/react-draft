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
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
    },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
