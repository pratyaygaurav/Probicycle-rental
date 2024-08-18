import { Header } from "../UI/Header";
import { Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const LayoutPublic = (props) => {

    const { routes } = props;

    return (
        <>
            <Header />

            <Container>
                <Row>
                    <Routes>
                        {
                            routes.map((route, index) => (

                                <Route key={index} path={route.path}
                                    exact={route.exact} element={<route.element />} />
                            ))
                        }
                    </Routes>
                </Row>
            </Container>
        </>
    );
}

export default LayoutPublic;