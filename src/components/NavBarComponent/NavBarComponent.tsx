import './NavBarComponent.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function NavBarComponent() {
    return (
        <div className='generalComponent'>
            <div>
                <a href="/">
                    <img className="img-thumbnail" width={50} height={50} src="/img/LLL1.png" />
                </a>
            </div>
            <div>
                <NavDropdown title="Langages ❤️" id="titleBehavior">
                    <NavDropdown.Item href="#">Les mots valorisants     </NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item href="#">Les moments de qualité   </NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item href="#">Les cadeaux              </NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item href="#">Les services rendus      </NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item href="#">Le toucher physique      </NavDropdown.Item>
                </NavDropdown>
            </div>

            <div >
                <a href="/KnowYourLL" id="titleBehavior"> Connaître Votre Langage 💻</a>
            </div>
            <div className="searchElement">
                <FormControl type="search" placeholder="Search" className="ml-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
            </div>
        </div>
    );
}

export default NavBarComponent