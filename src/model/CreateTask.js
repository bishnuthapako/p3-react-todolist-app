import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal, toggle}) {
    const [username, setUserName]=useState("") 
    const [title, setTitle]=useState("")
    const [messages, setMessages]=useState("")

    function handleSubmitForm(e){
        e.preventDefault()
    }

    function handleInputSubmit(e){
        const {name, value}=e.target
        if(name ==="username"){
            setUserName(value)
        } else if (name ==="title"){
            setTitle(value)
        } else {
            setMessages(value)
        }
    }


  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmitForm}>
                    <div className='form-group'>
                        <label>Enter Your First Name</label>
                        <input type="text" className='form-control' name='username' value={username} onChange={handleInputSubmit}/>
                    </div>
                    <div className='form-group'>
                        <label>Enter The Headline</label>
                        <input type="text" className='form-control' name='title' value={title} onChange={handleInputSubmit}/>
                    </div>
                    <div className='form-group'>
                        <label>Your Message</label>
                        <textarea rows="5" className='form-control' name='messages' value={messages} onChange={handleInputSubmit}></textarea>
                    </div>

                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>
                Create
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
    </Modal>
  )
}

export default CreateTask