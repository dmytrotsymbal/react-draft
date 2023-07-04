import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Todo = {
    id: number
    title: string
    completed: boolean
}

type TodosState = {
    todos: Todo[]
}

const initialState: TodosState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
            })
            action.payload = ''
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        },
        toggleTodoComplet: (state, action: PayloadAction<number>) => {
            const toggleTodo = state.todos.find(
                (todo) => todo.id === action.payload
            )
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed
            }
        },
    },
})

export const { addTodo, deleteTodo, toggleTodoComplet } = todoSlice.actions

export default todoSlice.reducer
