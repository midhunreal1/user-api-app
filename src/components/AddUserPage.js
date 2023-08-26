import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function AddUserPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [premiumMember, setPremiumMember] = useState(false);

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const submitUser = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:8000/users", {
            name: name,
            email: email,
            age: parseInt(age),
            premiumMember: premiumMember
        });

        const id = response.data.id;
        navigate('/users/' + id);
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <Card className="p-4">
                    <Form onSubmit={submitUser}>
                    <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='name' required placeholder='Enter name' value={name} onChange={(event) => setName(event.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required placeholder='Enter email' value={email} onChange={(event) => setEmail(event.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Age</Form.Label>
                            <Form.Control type='text' required placeholder='Enter age' value={age} onChange={(event) => setAge(event.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Check type='checkbox' label='Premium user' checked={premiumMember} onChange={(event) => setPremiumMember(event.target.checked)} />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Add User
                        </Button>
                        </Form>
                </Card>
            </div>
        </div>
    );
}
export default AddUserPage;
 