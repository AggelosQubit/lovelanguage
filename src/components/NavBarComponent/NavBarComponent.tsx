import './NavBarComponent.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";

function NavBarComponent(){

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#">
            <img className="img-thumbnail" width={50} height={50} src="/img/LLL1.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Langages ❤️" className='titleNav'  id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="#">Les mots valorisants</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les moments de qualité</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les cadeaux</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les services rendus </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Le toucher physique </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#">Connaître Votre Langage 💻</Nav.Link>
                </Nav>
                <Form className="offset-md-7  col-md-2 d-flex">
                    <FormControl type="search" placeholder="Search" className="ml-2" aria-label="Search"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBarComponent