import './NavBarComponent.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function NavBarComponent() {
    return (
        <Navbar className='generalComponent' bg="dark" expand="lg" style={{ border: "solid 1px yellow" }}>
            <Navbar.Brand href="/"><img className="img-thumbnail" width={50} height={50} src="/img/LLL1.png" /></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className='langagesElement'>
                <Nav className="">
                    <NavDropdown title="Langages ❤️" id="titleBehavior">
                        <NavDropdown.Item href="#">Les mots valorisants</NavDropdown.Item>  <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les moments de qualité</NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les cadeaux</NavDropdown.Item>           <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les services rendus </NavDropdown.Item>  <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Le toucher physique </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <div >
                <a href="/KnowYourLL" id="titleBehavior"> Connaître Votre Langage 💻</a>
            </div>
            <div className="searchElement">
                <FormControl type="search" placeholder="Search" className="ml-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
            </div>
        </Navbar>
    );
}

export default NavBarComponent