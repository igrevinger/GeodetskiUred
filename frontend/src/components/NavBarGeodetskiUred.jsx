import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../constants';



export default function NavBarGeodetskiUred(){

    const navigate  = useNavigate();


    return(

        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand
                className='ruka'
                onClick={()=>navigate( RouteNames.HOME)} 
                >Geodetski ured</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <NavDropdown title="Programi" id="basic-nav-dropdown">
                    <NavDropdown.Item 
                    onClick={()=>navigate(RouteNames.ZAPOSLENIK_PREGLED)}
                    >Zaposlenici</NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link href='https://grevingerivan-001-site1.ktempurl.com/swagger' target='_blank'>Swagger</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>

    )

}