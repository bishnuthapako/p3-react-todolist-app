import React from 'react'
import MessageDisplayCard from './MessageDisplayCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Message({todoList}) {

  console.log(todoList, 'bishnu')

  const todoListApi = todoList.map((user)=>
  <MessageDisplayCard 
  key = {user.id}
  username = {user.username}
  title = {user.messages[0].title}
  message = {user.messages[0].comment}
  />
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