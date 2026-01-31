import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../features/todoSlice';



function Todos(){
    const todos = useSelector((state)=> state.todos)  //just a method but u get the state access here
    const dispatch = useDispatch();


    return(
        <div className='mt-8'>
            <h2 className='text-2xl font-bold text-white mb-6'>Your Todos</h2>
            {todos.length === 0 ? (
                <p className='text-gray-400 text-center py-8'>No todos yet. Add one to get started!</p>
            ) : (
                <ul className='space-y-3'>
                    {todos.map((todo)=>(
                        <li 
                            key={todo.id}
                            className='flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 group'
                        >
                            <span className='text-white break-words flex-1'>{todo.text}</span>
                            <button 
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className='ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md transition-colors duration-200 hover:scale-110 transform'
                                title='Delete todo'
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Todos;