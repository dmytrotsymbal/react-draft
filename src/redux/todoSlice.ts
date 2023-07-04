import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type Todo = {
    id: number
    title: string
    completed: boolean
}

type TodosState = {
    todos: Todo[]
    loading: boolean
    error: string | null
}

//----------------------------------------------------------------------------------------------

export const fetchTodos = createAsyncThunk<
    Todo[],
    undefined,
    { rejectValue: string }
>('todos/fetchTodos', async (_, { rejectWithValue }) => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )

    if (!response.ok) {
        return rejectWithValue('Can not fetch!')
    }
    const data = await response.json()
    return data
})

//----------------------------------------------------------------------------------------------

export const addNewTodo = createAsyncThunk<
    Todo,
    string,
    { rejectValue: string }
>(
    'todos/addTodo',

    async function (title, { rejectWithValue }) {
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
        console.log(todo)
        if (!response.ok) {
            return rejectWithValue('Can not add!')
        }

        return (await response.json()) as Todo
    }
)

//----------------------------------------------------------------------------------------------

export const toggleAsyncTodoComplete = createAsyncThunk<
    Todo,
    number,
    { rejectValue: string; state: { todos: TodosState } }
>('todos/toggleTodoComplet', async (id, { rejectWithValue, getState }) => {
    const todo = getState().todos.todos.find((todo) => todo.id === id)

    if (todo) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: !todo.completed }),
            }
        )
        if (!response.ok) {
            return rejectWithValue('Can not update the state!')
        }

        return (await response.json()) as Todo
    }

    return rejectWithValue('Can not update the state!')
})

//----------------------------------------------------------------------------------------------

export const deleteAsyncTodo = createAsyncThunk<
    number,
    number,
    { rejectValue: string }
>('todos/deleteTodo', async (id, { rejectWithValue }) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            method: 'DELETE',
        }
    )
    console.log(response)
    if (!response.ok) {
        return rejectWithValue('Can not delete!')
    }
    return id
})

//----------------------------------------------------------------------------------------------

const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null,
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // addTodo: (state, action: PayloadAction<string>) => {
        //     state.todos.push({
        //         id: Date.now(),
        //         title: action.payload,
        //         completed: false,
        //     })
        //     action.payload = ''
        // },
        // deleteTodo: (state, action: PayloadAction<number>) => {
        //     state.todos = state.todos.filter(
        //         (todo) => todo.id !== action.payload
        //     )
        // },
        // toggleTodoComplet: (state, action: PayloadAction<number>) => {
        //     const toggleTodo = state.todos.find(
        //         (todo) => todo.id === action.payload
        //     )
        //     if (toggleTodo) {
        //         toggleTodo.completed = !toggleTodo.completed
        //     }
        // },
    },

    extraReducers(builder) {
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true
            state.error = null
        })

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload
            state.loading = false
        })

        builder.addCase(addNewTodo.pending, (state) => {
            state.error = null
        })

        builder.addCase(addNewTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload)
        })

        builder.addCase(toggleAsyncTodoComplete.fulfilled, (state, action) => {
            const toggleTodo = state.todos.find(
                (todo) => todo.id === action.payload.id
            )
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed
            }
        })

        builder.addCase(deleteAsyncTodo.fulfilled, (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        })

        builder.addCase(fetchTodos.rejected, (state, action: any) => {
            state.error = action.payload
            state.loading = false
        })
    },
})

// const { addTodo, deleteTodo, toggleTodoComplet } = todoSlice.actions

export default todoSlice.reducer
