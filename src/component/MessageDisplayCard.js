import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditMessage from '../model/EditMessage';

function MessageDisplayCard({username, userId, title, message, handleDelete, messages}) {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


 

  function handleDeleteButton(id) {
    console.log(id, 'id')
      {
        if(window.confirm('Are you sure?'))
        {
            fetch(`http://localhost:9292/users/${id}`,{
              method: 'DELETE'
            })
            handleDelete(id)
        }
      }
  }


  return (
    <>
    <Card>
      <Card.Header as="h5">{username}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title> 
        <Card.Text>{message} </Card.Text> 

        <Button variant="outline-light" style={{"cursor":"pointer"}} onClick={()=>setModal(true)}><i className="fa-solid fa-file-pen"></i></Button>{' '}
        <Button variant="outline-light" style={{"cursor":"pointer"}} onClick={()=>handleDeleteButton(userId)}><i className="fa-solid fa-trash"></i></Button>{' '}
      </Card.Body>
    </Card>
      <EditMessage modal={modal} toggle={toggle}/>
    </>
  )
}

export default MessageDisplayCard   