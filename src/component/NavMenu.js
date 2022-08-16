import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import CreateTask from '../model/CreateTask';

function NavMenu() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [inputTask, setInputTask]=useState([])


    function addOnInputForm(newItems){
      setInputTask([...inputTask, newItems])
    }


  return <>
        <div className="container-fluid p-5 bg-secondary text-white text-center">
        <h1>ToDo List</h1>
        <Button className='btn-todolist mt-3' variant="danger" onClick={()=>setModal(true)}>Create ToDo Task</Button>
        </div>
        <CreateTask modal={modal} toggle = {toggle} addOnInputForm={addOnInputForm}/>
        </>
}

export default NavMenu