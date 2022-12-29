import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './navbar.styles.css';
const NavBar = () => {
    return (
        <>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className="navContainer">
                        <Navbar.Brand><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>MOCK INTERVIEW</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link eventKey={2} className="github" href="https://github.com/KuchipudiVikas">
                                    Git Hub
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
            <Outlet />
        </>
    );
}

export default NavBar