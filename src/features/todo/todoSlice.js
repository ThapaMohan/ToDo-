import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    //initial value same as contexapi
    initialState,
    //methods
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                //defines text input to todoitem
                text: action.payload,
                completed: false
            };
            //it defines adding todo to the todoitem list
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //filter works on true value so if id doesnot match then remove the item from list
            state.todos = state.todos.filter(todo =>
                todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = newText;
            }
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

//exporting indivdual method later use in component
export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions


//exporting the reducer
export default todoSlice.reducer

