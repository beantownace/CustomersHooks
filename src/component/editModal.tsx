import React,{useState} from "react";
import { Button,  Header, Image, Modal, Form} from 'semantic-ui-react';

interface MyProps {
    row:{original:{first_name:string,last_name:string,email:string,id:string}}; 
    editCustomer: (first_name:string, last_name:string, email:string, id:string) => void;
  }
  
const EditModal: React.FC<MyProps> = ({row, editCustomer}) => {
    const [text, changeValue] = useState({first_name:row.original.first_name, last_name:row.original.last_name, id:row.original.id, email:row.original.email});
    const [value, toggleValue] = useState(false);

    function toggleModal(){
        toggleValue(!value);
    }

    function changeText(e:any){
        console.log(e.target.name);
        switch(e.target.name){
            case "first_name":
                changeValue({first_name:e.target.value, last_name:text.last_name, id:row.original.id, email:row.original.email});
                break;
           case "last_name":
               changeValue({first_name:text.first_name, last_name:e.target.value, id:row.original.id, email:row.original.email});
               break;
           default:
               return;
        }
    }

    function editCustomerInfo(e:any){
        e.preventDefault();
        editCustomer(text.first_name, text.last_name, text.id, text.email)
        toggleModal();
    }


    return (
            <Modal 
            open={value}
            trigger={ <Button color='blue' onClick={toggleModal}>Edit</Button>}>
                <Modal.Header>Edit a customer</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://avatarfiles.alphacoders.com/159/thumb-159198.gif' />
                <Modal.Description>
                    <Header>Email: {row.original.email}</Header>
                    <Form>
                        <Form.Field>
                        <label>First Name</label>
                        
                        <input name="first_name" placeholder='First Name' value={text.first_name} onChange={changeText}/>
                        </Form.Field>
                        <Form.Field>
                        <label>Last Name</label>
                        <input name="last_name" placeholder='Last Name' value={text.last_name} onChange={changeText}/>
                        </Form.Field>
                        <Button type='submit' onClick={editCustomerInfo}>Edit</Button>
                        <Button secondary onClick={toggleModal}>Cancel</Button>
                    </Form>
                </Modal.Description>
                </Modal.Content>
            </Modal>
    )
        
}

export default EditModal;