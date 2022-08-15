import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function EditMessage({modal, toggle}) {


  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                
                <div className='form-group'>
                        <label>Update Title</label>
                        <input type="text" className='form-control'/>
                    </div>
                    
                    <div className='form-group'>
                        <label>Update Message</label>
                        <textarea rows="5" className='form-control'></textarea>
                    </div>

                    <ModalFooter>
                            <Button color="primary" onClick={toggle}>
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