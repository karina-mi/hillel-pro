import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart.items)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return <div>
    <Navbar bg="#2b2b2b" expand="lg">
    <Container>
      <Navbar.Brand href="products"> <Link className='logo' to={'/'}>
        <i className="bi bi-unity logo-header"></i>
      </Link>{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Nav.Link as={Link} to='/'>
                All Products
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Nav.Link as={Link} to='/smartphones'>
                Smartphones
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link as={Link} to='/laptops'>
                Laptops
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Link className='cart-link' to='/cart'>
        {getTotalQuantity()}
        <i className="bi bi-cart-check"></i>
      </Link>
    </Container>
    </Navbar>
  </div>

}

export default Header



