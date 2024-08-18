import { useEffect } from "react";
import { Col, Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { action_getData, action_resetData } from "../../REDUX/actions";

import CardData from "./CardData";

const List = () => {

    const dispatch = useDispatch();
    const { get_data } = useSelector(state => state.state_data);

    useEffect(() => {

        fetch("/data_bikes.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            dispatch(action_getData(data));
        });

    }, [dispatch]);

    return (

        <>
            <Col md={8} className="mx-auto mb-5">
                <Card className="card_style_container">

                    <Card.Header className="text-center card_style_header_main">
                        <h2>Rental your bike right now! </h2>
                    </Card.Header>

                    <Card.Body>
                        <Row>

                            {
                                get_data.map((e, i) => (
                                    <Col md={4} key={i} className="mb-3">
                                        <CardData data={e} dispatch={dispatch} action_resetData={action_resetData} />

                                    </Col>
                                ))
                            }
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default List;