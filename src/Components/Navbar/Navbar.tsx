import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown, Button, ButtonGroup} from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <div style={{ margin: '0 20px' }}>
        <Navbar bg="black" expand="lg" variant="dark">
            <Navbar.Brand as={Link} to="/HC/Home">Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/HC/Rebajas">Ofertas</Nav.Link>
                    <Nav.Link as={Link} to="/HC/Relojes">Relojes</Nav.Link>
                    <Nav.Link as={Link} to="/HC/Categorias">
                        <Dropdown as={ButtonGroup}>
                        <Button variant="link" style={{ color: 'gray', textDecoration: 'none' }}>Categorías</Button>
                            <Dropdown.Toggle style={{ backgroundColor: 'transparent', border: 'none' }} split variant="success" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Inteligentes</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Analógicos</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Digitales</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/HC/Contacto">Contacto</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/HC/SignIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" style={{ fontSize: '24px' }}>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        </div>
    );
}

export default CustomNavbar;
