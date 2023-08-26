import React, { useState, useEffect } from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

export function EditUserPage() {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [premiumMember, setPremiumMember] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/users/${id}`);
                const user = response.data;

                setName(user.name);
                setEmail(user.email);
                setAge(user.age);
                setPremiumMember(user.premiumMember);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [id]);

    const updateUser = async (event) => {
        event.preventDefault();
        const response = await axios.patch(`http://localhost:8000/users/${id}`, { 
            name: name,
            email: email,
            age: parseInt(age),
            premiumMember: premiumMember
        });

        navigate(`/edit/${id}`);
    };

    const navigate = useNavigate();

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <Card className="p-4">
                    <Form onSubmit={updateUser}>
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
                            Update User
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
}
export default EditUserPage;