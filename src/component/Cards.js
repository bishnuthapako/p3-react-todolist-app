import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditMessage from '../model/EditMessage';




function Cards({handleDelete, user_id, title, message, onUpdateItem, editMessage}) {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function handleDeleteButton(id) {
    console.log(id, 'id')
      {
        if(window.confirm('Are you sure?'))
        {
            fetch(`http://localhost:9292/message/${id}`,{
              method: 'DELETE'
            })
            handleDelete(id)
        }
      }
  }


  return (
  <>
    <Card.Body>
        <Card.Title>{title}</Card.Title> 
        <Card.Text>{message} </Card.Text> 
        <Button variant="outline-light" style={{"cursor":"pointer"}} onClick={()=>setModal(true)}><i className="fa-solid fa-file-pen"></i></Button>{' '}        
        <Button variant="outline-light" style={{"cursor":"pointer"}} onClick={()=>handleDeleteButton(user_id)}><i className="fa-solid fa-trash"></i></Button>{' '}
      </Card.Body>
      <EditMessage modal={modal} toggle={toggle} onUpdateItem={onUpdateItem} editMessage={message} messageTitle={title} eMessage={editMessage}/>
    </>
  )
}

export default Cards