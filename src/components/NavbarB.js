import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useContext } from "react";                      
import { AuthContext } from "./../context/auth.context";  



function NavBarB() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

       
      {isLoggedIn
        ? ( <>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/tools">Herramientas</Nav.Link>

            <Nav.Link as={Link} to="/addWorld">Biblioteca</Nav.Link>

            <Nav.Link onClick={logOutUser}>Logout</Nav.Link>

            <span>{user.name}</span>
          </Nav>


          </>)
        :(<>
          <Nav>
 
            <Nav.Link as={Link} to= "/signup">Registro</Nav.Link>
            <Nav.Link as={Link} to= "/login">Login</Nav.Link>
          </Nav>
          </>)
          }

        </Navbar.Collapse>
        
      </Container>

    </Navbar>
    
  );
}

export default NavBarB;




