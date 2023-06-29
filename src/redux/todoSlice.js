import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos?_limit=10'
            )

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            })
            action.payload = ''
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            )
        },
        toggleTodoComplet: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        },
    },

    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading...'
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.todos = action.payload
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    },
})

export const { addTodo, deleteTodo, toggleTodoComplet } = todoSlice.actions

export default todoSlice.reducer
