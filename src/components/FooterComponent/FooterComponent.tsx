import './FooterComponent.css';
import {Row} from "react-bootstrap";


function FooterComponent(){
    return(
        <Row className="footer" >
            <div className="py-3 bg-dark text-white">
                <div className="row">
                    <div className="col-md-4 offset-md-1 text-center text-md-left">
                        {/*Add your copyright notice here*/}
                        <p className="mb-0">Copyright &copy; AggelosQubit { new Date().getFullYear() }</p>
                    </div>
                    <div className="col-md-2 text-center text-md-right">
                            {/*<!-- Add a link to your GitHub profile -->*/}
                        <a href="https://github.com/AggelosQubit" className="text-white" target="_blank">
                            <i className="fab fa-github mr-2"></i>GitHub
                        </a>
                    </div>
                    <div className="col-md-2 text-center text-md-right">
                        <a href="https://drum.io/aggelosqubit" className="text-white" target="_blank">
                            <i className="fab fa-github mr-2"></i>Drum Page
                        </a>
                    </div>
                    <div className="col-md-2 text-center text-md-right">
                        <a href="https://www.instagram.com/theintrovertedprogrammer/" className="text-white" target="_blank">
                            <i className="fab fa-github mr-2"></i>Instagram
                        </a>
                    </div>
                </div>
            </div>
        </Row>
    );
}

export default FooterComponent