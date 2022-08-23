import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function EditMessage({modal, toggle, onUpdateItem, editMessage, messageTitle, eMessage}) {

    // console.log(message, "message")

    const [title, setTitle]=useState(messageTitle)
    const [comment, setComment]=useState(editMessage)

function handleFormSubmit(e){
    e.preventDefault();

    const inputData={
        title: title,
        comment: comment
    }


    fetch(`http://localhost:9292/message/${eMessage.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
    }).then ((r)=>r.json())
    .then((updateMessage)=>{
        console.log(updateMessage,'message' )
        onUpdateItem(updateMessage)
    })
    
}

    
function handleInput(e){
const {name, value}=e.target
    if(name==='title'){
        setTitle(value)
    } else{
        setComment(value)
     }
}

  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form onSubmit={handleFormSubmit}>
                
                <div className='form-group'>
                        <label>Update Title</label>
                        <input type="text" className='form-control' name='title' value={title} onChange={handleInput} required/>
                    </div>
                    
                    <div className='form-group'>
                        <label>Update Message</label>
                        <textarea rows="5" className='form-control' name='comment' value={comment} onChange={handleInput} required></textarea>
                    </div>

                    <ModalFooter>
                            <Button type='submit' color="primary" onClick={toggle}>
                                Update
                            </Button>{' '}
                            <Button color="secondary" onClick={toggle}>
                                Cancel
                            </Button>
                    </ModalFooter>

                </form>
            </ModalBody>
                       
    </Modal>
  )
}

export default EditMessage