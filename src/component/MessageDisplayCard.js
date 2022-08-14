import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MessageDisplayCard({username, title, message}) {


  return (
    <Card>
      <Card.Header as="h5">{username}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <Card.Text>{message} </Card.Text>
        <Button variant="outline-light"><i className="fa-solid fa-file-pen"></i></Button>{' '}
        <Button variant="outline-light"><i className="fa-solid fa-trash"></i></Button>{' '}
      </Card.Body>
    </Card>

  )
}

export default MessageDisplayCard