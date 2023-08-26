import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const ListUsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from your API endpoint
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleDelete = async (id) => {
        try {
            // Send a request to delete the user from the server
            await fetch(`http://localhost:8000/users/${id}`, {
                method: 'DELETE',
            });
    
            // Update the users state to remove the deleted user
            const updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    

    return (
        <div>
            <h2>List of Users</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>
                                <Link to={`/view/${user.id}`}>
                                    <Button variant="info" className="mr-2">View</Button>
                                </Link>
                                <Link to={`/edit/${user.id}`}>
                                    <Button variant="primary" className="mr-2">Edit</Button>
                                </Link>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListUsersPage;
