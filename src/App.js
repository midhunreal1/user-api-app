import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import ListUsersPage from './components/ListUsersPage';
import AddUserPage from './components/AddUserPage';
import EditUserPage from './components/EditUserPage';
import ViewUserPage from './components/ViewUserPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <div>
        <BrowserRouter>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href='/'>User Management App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/add'>Add New</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container className='pt-5'>
            <Routes>
                <Route index element={<ListUsersPage />} />
                <Route path="/add" element={<AddUserPage />} />
                <Route path="/edit/:userId" element={<EditUserPage />} />
                <Route path="/view/:userId" element={<ViewUserPage />} />
            </Routes>
            </Container>
        </BrowserRouter>
        </div>
    );
}

export default App;
