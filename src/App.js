import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import ListUsersPage from './ListUsersPage';
import AddUserPage from './AddUserPage';
import EditUserPage from './EditUserPage';
import ViewUserPage from './ViewUserPage';

function App() {
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">User Management App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/add">Add New</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/" element={<ListUsersPage />} />
                <Route path="/add" element={<AddUserPage />} />
                <Route path="/edit/:id" element={<EditUserPage />} />
                <Route path="/view/:id" element={<ViewUserPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
