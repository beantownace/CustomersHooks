import React,{useState} from "react";
import { Button, Modal, Form} from 'semantic-ui-react';

interface MyProps {
    children?: React.ReactNode;
    addCustomer: (first_name:string, last_name:string)=>void;
  }

const AddModal: React.FC<MyProps> = ({addCustomer}) => {

    const [text, changeValue] = useState({first_name:"", last_name:""});
    const [value, toggleValue] = useState(false);

    function toggleModal(){
        toggleValue(!value);
    }

    function changeText(e:any){
        switch(e.target.name){
            case "first_name":
                changeValue({first_name:e.target.value, last_name:text.last_name});
                break;
           case "last_name":
               changeValue({first_name:text.first_name, last_name:e.target.value});
               break;
           default:
               return;
        }
    }

    function addCustomerInfo(e:any){
        e.preventDefault();
        addCustomer(text.first_name, text.last_name)
        toggleModal();
    }

    return (
            <Modal 
            open={value}
            trigger={ <Button color='blue' onClick={toggleModal}> Add a new customer</Button>}>
                <Modal.Header>Add a customer</Modal.Header>
                <Modal.Content image>
                <Modal.Description>
                    <Form>
                        <Form.Field>
                        <label>First Name</label>
                        <input name="first_name" placeholder='First Name' onChange={changeText}/>
                        </Form.Field>
                        <Form.Field>
                        <label>Last Name</label>
                        <input name="last_name" placeholder='Last Name' onChange={changeText}/>
                        </Form.Field>
                        <Button type='submit' onClick={addCustomerInfo}>Add</Button>
                        <Button secondary onClick={toggleModal}>Cancel</Button>
                    </Form>
                </Modal.Description>
                </Modal.Content>
            </Modal>
    )
        
}

export default AddModal;