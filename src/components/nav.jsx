import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='p-0'>
          <Navbar.Brand className='ms-5'>Starwars Databank</Navbar.Brand>
          <Nav className="me-auto">
            <Link to= '/'><Button variant="info" className='me-2'>Characters</Button></Link>
            <Link to= '/vehicles'><Button variant="info" className='me-2'>Vehicles</Button></Link>
            <Link to= '/planets'><Button variant="info">Planets</Button></Link>
            <NavDropdown title="Favorites" id="basic-nav-dropdown">
             <NavDropdown.Item>Name</NavDropdown.Item>      
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;