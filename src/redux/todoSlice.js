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

export const deleteAsyncTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    method: 'DELETE',
                }
            )
            console.log(response)
            if (!response.ok) {
                throw new Error('Can not delete!')
            }

            dispatch(deleteTodo({ id }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const toggleAsyncTodoComplet = createAsyncThunk(
    'todos/toggleTodoComplet',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    method: 'PATCH',
                }
            )
            console.log(response)
            if (!response.ok) {
                throw new Error('Can not update the state!')
            }

            dispatch(toggleTodoComplet({ id }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'todos/addTodo',
    async (title, { rejectWithValue, dispatch }) => {
        try {
            const todo = {
                userId: 1,
                title: title,
                completed: false,
            }

            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(todo),
                }
            )
            console.log(response)
            if (!response.ok) {
                throw new Error('Can not add!')
            }

            const data = await response.json()
            dispatch(addTodo(data))
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
            state.todos.push(action.payload)
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

        [deleteAsyncTodo.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [toggleAsyncTodoComplet.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    },
})

const { addTodo, deleteTodo, toggleTodoComplet } = todoSlice.actions

export default todoSlice.reducer
