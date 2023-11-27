import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Starwars Databank</Navbar.Brand>
          <Nav className="me-auto">
            <Link to= '/'><Button variant="info" className='me-2'>Characters</Button></Link>
            <Link to= '/vehicles'><Button variant="info">Vehicles</Button></Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;