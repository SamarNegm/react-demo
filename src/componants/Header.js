
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import React, { Component } from "react";
class Header extends Component {

    render() {
        return <>
            <Navbar style={{ backgroundColor: '#F7F5F2' }}>
                <Container>
                    <Navbar.Brand href="/home">Samar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/posts">Posts</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/ShortPolling">Short Polling</Nav.Link>
                        <Nav.Link href="/LongPolling">Long Polling</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    }
}
export default Header;