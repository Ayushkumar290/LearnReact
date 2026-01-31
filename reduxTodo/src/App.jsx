import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="p-4 text-2xl text-red-400">Learn redux </div>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
