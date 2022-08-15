import React, {useState, useEffect} from 'react'
import NavMenu from './NavMenu'
import Message from './Message'

function TodoList() {

const [todoList, setTodoList]=useState([])
const [isLoading, setIsLoading]=useState(false)

// console.log(todoList, 'todo')

const api = "http://localhost:9292/users"
const getTodoList = async ()=>{
  const response = await fetch(api)
  const data = await response.json()
  setTodoList(data)
  setIsLoading(true)
}

useEffect(()=>{
  getTodoList()
},[])

    function handleDelete(id){
      const deleteMessage = todoList.filter((user)=>user.id !==id)
      setTodoList(deleteMessage)
    }



  return (
    <div>
      <NavMenu />
      <div className='container mt-4'>
        <Message todoList={todoList} handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default TodoList