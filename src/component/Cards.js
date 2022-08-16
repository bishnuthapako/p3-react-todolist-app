import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Cards() {


  return (
<>
        <Card.Title>hello</Card.Title> 
        <Card.Text>hello message </Card.Text>
        <Button variant="outline-light" style={{"cursor":"pointer"}} onClick={()=>setModal(true)}><i className="fa-solid fa-file-pen"></i></Button>{' '}
        <Button variant="outline-light" style={{"cursor":"pointer"}} onClick={()=>handleDeleteButton(userId)}><i className="fa-solid fa-trash"></i></Button>{' '}
</>
  )
}

export default Cards