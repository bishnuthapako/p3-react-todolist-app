import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal, toggle, addOnInputForm}) {
    // const [username, setUserName]=useState("") 
    const [user_id, setUser_id]=useState("")
    const [title, setTitle]=useState("")
    const [comment, setComment]=useState("")

    function handleSubmitForm(e){
        e.preventDefault()
        const inputData = {
            title: title,
            comment: comment,
            user_id: parseInt(user_id)
        }
        fetch( "http://localhost:9292/message",{
            method: 'POST',
            headers:{
                    "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData)
            })  
            .then((res)=>res.json())
            .then((newItem)=>{
            // addOnData(newItem)
            // console.log(newItem, 'new')
            addOnInputForm(newItem)
            }
                )

    }




    function handleInputSubmit(e){
        const {name, value}=e.target
        if(name ==="user_id"){
            setUser_id(value)
        } else if(name === "title"){
            setTitle(value)
        } else {
            setComment(value)
        }
    }


  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmitForm}>
                <div className='form-group'>
                        <label>Enter Any User Id</label>
                        <input type="text" className='form-control' name='user_id' value={user_id} onChange={handleInputSubmit} required/>
                    </div>
                <div className='form-group'>
                        <label>Enter The Headline</label>
                        <input type="text" className='form-control' name='title' value={title} onChange={handleInputSubmit} required/>
                    </div>
                    
                    <div className='form-group'>
                        <label>Your Message</label>
                        <textarea rows="5" className='form-control' name='comment' value={comment} onChange={handleInputSubmit} required></textarea>
                    </div>

                    <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Create
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

export default CreateTask