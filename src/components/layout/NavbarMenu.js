import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItlogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import { Form } from 'react-bootstrap'
import Cart from '../cart/Cart'







const NavbarMenu = () => {

    const { authState: { user: { username } }, logoutUser } = useContext(AuthContext)



    const logout = () => {
        logoutUser()
    }


    return (


        <Navbar expand='lg' bg='black' variant='dark' className='shadow navbar' style={
            {
                position: 'fixed',
                zIndex: '1',
                width: '100%',
                top: '0',
                padding: '8px 5px'
            }
        } >
            <Container>
                <Navbar.Brand className='font-weight-bolder text-white' >
                    <img
                        src={learnItlogo}
                        alt="image"
                        width='25'
                        height='25'
                        className='mr-5'
                    />
                    ChocoShop
                </ Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav className='' >
                        <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link}>
                            Dashboard
                        </Nav.Link>
                        <Nav.Link className='font-weight-bolder text-white' to='/manager' as={Link}>
                            Manager
                        </Nav.Link>
                        <Nav.Link className='font-weight-bolder text-white' to='/about' as={Link}>
                            About
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                <Nav>

                    <Nav.Link className='font-weight-bolder text-white' to='/user' as={Link}  >
                        Welcome <span style={{ color: '#F9F9C5' }}> | {username}</span>
                    </Nav.Link>
                    <NavDropdown title="Choco" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Setting</NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            User
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Help</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#" onClick={logout}>
                            <img src={logoutIcon} alt="logout" width='20' height='20' className='mr-2' />
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavbarMenu



