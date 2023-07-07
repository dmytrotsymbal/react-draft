import { createSelector } from '@reduxjs/toolkit'

export const selectAllTodos = (state) => state.todos.todos
export const selectActiveFilter = (state) => state.filter
export const selectTheme = (state) => state.theme

export const selectTodosByFilter = createSelector(
    [selectAllTodos, selectActiveFilter],

    (allTodos, activeFilter) => {
        if (activeFilter === 'all') {
            return allTodos
        }

        if (activeFilter === 'completed') {
            return allTodos.filter((todo) => todo.completed)
        }

        if (activeFilter === 'active') {
            return allTodos.filter((todo) => !todo.completed)
        }
    }
)
