import React ,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {addTodo} from  '../features/todoSlice';
// dispatch reducer ka use karke store me changes karta h

function AddTodo(){
    const [input,setInput] = useState("");

    const dispatch = useDispatch();
    const addHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input)) // Dispatcher  me addTodo reducer pass karna h jisme input stor ke pass jayega 
        setInput("");
    }

    return (
        <form onSubmit = {addHandler}>
            <input 
                type="text"
                className='bg-gray-800 p-2 w-full text-white outline-none rounded-md  mb-4'
                palaceholder='Add todo'
                value={input}
                onChange={(e)=> setInput(e.target.value)}
            />
            
            <button
                type='submit'
                className='bg-blue-600 p-2 w-full text-white rounded-md hover:bg-blue-700 transition-colors'
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo;