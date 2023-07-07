import { createSlice } from '@reduxjs/toolkit'

export type TodoFilter = {
    name: string
}

const initialState: TodoFilter = {
    name: 'all',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (_, action) => action.payload,
    },
})

export const { changeFilter } = filterSlice.actions

export default filterSlice.reducer
