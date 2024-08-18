import { Navbar, Container } from 'react-bootstrap';

export const Header = () => {

    return (
        <>
            <Navbar className="mb-5 navbar_style">
                <Container>
                    <Navbar.Brand style={{ color: "#4defa7" }}><h3>Pro-Bike Rental</h3></Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
