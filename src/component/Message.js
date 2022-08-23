import React from 'react'
import MessageDisplayCard from './MessageDisplayCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Message({todoList, handleDelete, onUpdateItem}) {

  // console.log(todoList, 'bishnu')

  const todoListApi = todoList.map((user)=>
{
  // console.log(user.messages[0].title, 'mapuser')
  return <MessageDisplayCard 
  key = {user.id}
  userId = {user.id}
  username = {user.username}
  handleDelete ={handleDelete}
  messages = {user.messages}
  onUpdateItem={onUpdateItem}
  />}
  ) 


  return ( 

    <Container>
    <Row>
      <Col className="d-grid gap-3">
            {todoListApi}
      </Col>
    </Row>
  </Container>
    
        )
  
}

export default Message