import './NavBarComponent.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function NavBarComponent() {
    return (
        <div className="generalComponent" >
            <div>
                <a href="/">
                    <img className="img-thumbnail" width={50} height={50} src="/img/LLL1.png" />
                </a>
            </div>
            <div className="d-none d-md-block">
                <NavDropdown title="Langages ❤️" id="titleBehavior">
                    <NavDropdown.Item href="#">Les mots valorisants     </NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item href="#">Les moments de qualité   </NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item href="#">Les cadeaux              </NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item href="#">Les services rendus      </NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item href="#">Le toucher physique      </NavDropdown.Item>
                </NavDropdown>
            </div>

            <div className="d-none d-md-block" >
                <a href="/KnowYourLL" id="titleBehavior"> Connaître Votre Langage 💻</a>
            </div>
            <div className="d-none d-md-block searchElement">
                <FormControl type="search" placeholder="Search" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
            </div>
            <div className="d-sm-none">
                <NavDropdown align="end" className='centerIt' title="Menu" id="titleBehavior">
                    <NavDropdown className="paddingItem" title=" Langages ❤️">
                        <NavDropdown.Item href="#">Les mots valorisants     </NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les moments de qualité   </NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les cadeaux              </NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#">Les services rendus      </NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#">Le toucher physique      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/KnowYourLL"> Connaître Votre Langage 💻     </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    );
}

export default NavBarComponent