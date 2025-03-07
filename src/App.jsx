import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1 className='text-4xl text-purple-700'>Learn Todos using Redux</h1>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </>

  )
}

export default App
