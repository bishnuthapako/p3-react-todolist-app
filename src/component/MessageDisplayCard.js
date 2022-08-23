import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from './Cards';

function MessageDisplayCard({username, handleDelete, messages, onUpdateItem}) {




 const results = messages.map((message)=>{
  // console.log(message.comment, 'title')
    return <Cards 
    key={message.id}
    title={message.title}
    message={message.comment}
    handleDelete={handleDelete}
    user_id = {message.id}
    onUpdateItem={onUpdateItem}
    editMessage={message}
    
    />
 })


  return (
    <>
    <Card>
      <Card.Header as="h5">{username}</Card.Header>
      {results}
    </Card>
      
    </>
  )
}

export default MessageDisplayCard   