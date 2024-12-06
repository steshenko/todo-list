import { createSlice } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
const savedPagination = JSON.parse(localStorage.getItem("pagination")) || { page: 1, itemsPerPage: 5 };
const savedFilters = JSON.parse(localStorage.getItem("filters")) || { sortByDate: "desc", completionStatus: "all" };

const initialState = {
    todos: savedTodos,
    pagination: savedPagination,
    filters: savedFilters,
    isHasCompleted: false,
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.unshift(action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        setPagination: (state, action) => {
            state.pagination = action.payload;
            localStorage.setItem("pagination", JSON.stringify(state.pagination));
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
            localStorage.setItem("filters", JSON.stringify(state.filters));
        },
        checkIsHasCompletedToDo: (state) => {
            const isHasCompleted =  state.todos.filter(item => (item.completed)).length;
            state.isHasCompleted = !!isHasCompleted;
        }
    },
});

export const {
    addTodo,
    removeTodo,
    updateTodo,
    toggleComplete,
    setPagination,
    setFilters,
    checkIsHasCompletedToDo,
} = todoSlice.actions;

export default todoSlice.reducer;
