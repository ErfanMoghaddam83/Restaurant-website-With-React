import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HOVERCOLOR, TITLE } from "../../helper/palette";
import { Link, Outlet } from 'react-router-dom';
const Header = () => {


    return (
        <>
        
            <Navbar expand="lg"  style={{backgroundColor:"transparent",
                position: 'absolute', width: '100%', top: '1px', height: '70px',
                zIndex: '997',
                padding: '10px 0;'

            }} >
                <Container >
                    <Navbar.Brand href="#"><span style={{ color: TITLE, }}>Navbar scroll</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className="bg-warning " />
                    <Navbar.Collapse id="navbarScroll"  >
                        <Nav
                            className="ms-auto mx-5 my-5 my-lg-0  align-items-center "
                            style={{ maxHeight: '100px',
                         }}
                         
                            navbarScroll
                        >
                            <Nav.Link><Link to="/" style={{ color: TITLE }}>خانه</Link></Nav.Link>
                            <Nav.Link><Link to="/gallery" style={{ color: TITLE }}>گالری</Link></Nav.Link>
                            <Nav.Link><Link to="/menu" style={{ color: TITLE }}>منو</Link></Nav.Link>
                            <Nav.Link><Link to="/specials" style={{ color: TITLE }}>پیشنهاد سرآشپز</Link></Nav.Link>
                            <Nav.Link><Link to="/contact " style={{ color: TITLE }}>ارتباط با ما</Link></Nav.Link>
                            <Nav.Link><Link to="/chefs" style={{ color: TITLE }}>سرآشپزها</Link></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success bg-warning border-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
            <div>
            </div>
            <Outlet />
        </>
    )
}
export default Header;



