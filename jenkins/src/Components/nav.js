import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'


import React from 'react';

function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="mx-2 font-weight-bold" href="#home"><h4>JENKINS</h4></Navbar.Brand>
                <Col xs={2}>
                </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Blog</Nav.Link>
                        <NavDropdown title="Documentation" id="collasible-nav-dropdown">
                            <h6 className="mx-3">User Guide</h6>
                            <NavDropdown.Item href="#action/3.1">-Installing Jenkins</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-Jenkins Pipeline</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-Jenkins Managing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-System Adminsitration</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-Terms and definations</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <h6 className="mx-3">Solution Pages</h6>
                            <h6 className="mx-3">Tutorials</h6>
                            <NavDropdown.Item href="#action/3.1">-Guided Tour</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-More Tutorials</NavDropdown.Item>
                            <h6 className="mx-3">Developers Guide</h6>
                            <h6 className="mx-3">Contributor Guide</h6>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Plugins</Nav.Link>
                        <NavDropdown title="Community" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Chat</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Meet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Issue Tracker</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Mailing Lists</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Roadmap</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Account Manangement</NavDropdown.Item>
                            <h6 className="mx-3">Spacial Interest Groups</h6>
                            <NavDropdown.Item href="#action/3.1">-Installing Jenkins</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-Jenkins Pipeline</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-Jenkins Managing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-System Adminsitration</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-Terms and definations</NavDropdown.Item>
                            
                        </NavDropdown>

                        <NavDropdown title="Sub Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Chat</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Meet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Issue Tracker</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Mailing Lists</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Roadmap</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Account Manangement</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">-Installing Jenkins</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Chat</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Meet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Issue Tracker</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Mailing Lists</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="English" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Chinese</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                    <Button   variant="primary" style={{marginLeft:20}} >Download</Button>
                    <Col xs={0}>
                    </Col>
                    <Nav className="Search">
                        <Form inline="true">
                            <FormControl type="text" placeholder="Search" className=" mr-sm-10" />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>

    )
}

export default NavBar;