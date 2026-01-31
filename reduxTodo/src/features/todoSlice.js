import {createSlice,nanoid} from '@reduxjs/toolkit';



function sayHello(){
    console.log("Hello world");
}

const initialState   = {
    todos:[{id: 1 ,text:"Hello world"}]
}
// here exportd slice but below we have export functions(reducers) from the slice
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            return state.filter((todo)=> todo.id !== action.payload.id)   // action ke sath match nai hona chiye
        },
        updateTodo:(state,action)=>{
            return state.map((todo)=> todo.id === action.payload.id ?{...todo,text:action.payload.text} :todo); // map ka use karke todo find karo state me se and than uska text action se update karo
        }
    }

})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions; // reducers should be exported to use where needed

export default todoSlice.reducer; // export reducer to store.js