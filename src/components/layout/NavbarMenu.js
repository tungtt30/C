import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItlogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'






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
                    <Nav.Link className='font-weight-bolder text-white' to='/upload' as={Link}>
                        Upload
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/about' as={Link}>
                        About
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>

                <Nav.Link className='font-weight-bolder text-white' to='/user' as={Link}  >
                    Welcome <span style={{ color: '#F9F9C5' }}> | {username}</span>
                </Nav.Link>
                <Button variant='dark' className='font-weight-bolder text-white  rounded' onClick={logout}>
                    <img src={logoutIcon} alt="logout" width='20' height='20' className='mr-2' />
                    Logout
                </Button>
            </Nav>
        </Navbar>

    )
}

export default NavbarMenu



