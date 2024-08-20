import {Navbar, Container} from 'react-bootstrap';

const NavbarComponent = () => {
  return (<Navbar bg="light" expand="lg" className="mb-4">
    <Container>
      <Navbar.Brand href="/" className="fw-bold fs-4">
        News App
      </Navbar.Brand>
    </Container>
  </Navbar>);
};

export default NavbarComponent;
