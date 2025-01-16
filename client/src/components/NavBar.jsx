import React from 'react'
import { Container, Nav, Navbar, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="dark" className='mb-4' style={{height: '3.75rem'}}>
        <Container>
            <Link to='/'>
            <h2>Chatapp</h2>
            </Link>
            
        </Container>
    </Navbar>
  )
}

export default NavBar
