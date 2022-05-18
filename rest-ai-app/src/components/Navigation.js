import React from 'react'
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
    render(){
        return(
            <Navbar variant="dark" activeKey="1" bg='dark' sticky='top' expand='md'>
                <Nav>
      <Nav.Item>
        <Nav.Link eventKey="1" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Choose Engine" id="nav-dropdown">
        <NavDropdown.Item href = "/curie">Curie</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </Nav>
    </Navbar>
        )
    }
}

export default Navigation