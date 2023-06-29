import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                id: Date.now(),
                text: 'Learn React',
                completed: false,
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload.text,
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
})

export const { addTodo, deleteTodo, toggleTodoComplet } = todoSlice.actions

export default todoSlice.reducer
