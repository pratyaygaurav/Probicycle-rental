import { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { ModalConfirm } from "../UI/Modal";
import { BsCalendarDate } from "react-icons/bs";
import { calculatePrice } from "../../HELPERS/calculatePrice";
import { BiBarcodeReader } from "react-icons/bi";
import { dateFormatInit, getDay } from "../../HELPERS/dateFormat";
import { useDispatch, useSelector } from "react-redux";
import { MdAlternateEmail, MdNearbyError } from "react-icons/md";
import {Col, Card, Row, Form, InputGroup, Button, Alert, Badge} from "react-bootstrap";
import { action_showAlert, action_hideAlert, action_inputValues } from "../../REDUX/actions";


const FormComplete = () => {

    const dispatch = useDispatch();
    const { isAlert, txt_alert } = useSelector(state => state.state_alert);

    const { input_data } = useSelector(state => state.state_input);
    const { firstname, lastname, email, phone } = input_data;

    const [useRentBy, setRentBy] = useState(1);
    const [useDatePickerValue, setDatePickerValue] = useState(dateFormatInit());
 
    const [usePriceTotalRent, setPriceTotalRent] = useState(getDay(useDatePickerValue) <= 14 ? 10 : 12);

    const [useModalDataDetails, setModalDataDetails] = useState([]);
    const [useIsOpenModal, setIsOpenModal] = useState(false);

    var data_bike_storage = JSON.parse(localStorage.getItem('data_bike_storage'));

    const onChangeRentBy = (e) => {
        setRentBy(Number.parseInt(e.target.value));
    }

    const onChangeInputValues = (e) => {

        dispatch(action_inputValues({
            ...input_data,
            [e.target.name]: e.target.value
        }));
    }

    const onChangeInputValuesDate = (e) => {

        setDatePickerValue(e.target.value);

        calculatePrice(e.target.value, useRentBy, setPriceTotalRent);

        dispatch(action_inputValues({
            ...input_data,
            date: e.target.value
        }));
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (firstname.trim() === "" || lastname.trim() === "" || email.trim() === "" || phone.trim() === "") {

            dispatch(action_showAlert("All fields are required"));

            return;
        }

        dispatch(action_hideAlert());

        setIsOpenModal(true);

        var current_values = {
            date: useDatePickerValue,
            firstname: firstname,
            lastname: lastname,
            bike_type: data_bike_storage.bike_type,
            name_bike: data_bike_storage.name_bike,
            rentBy: data_bike_storage.rentBy,
            price_total: data_bike_storage.price_total
        };

        setModalDataDetails(current_values);

        dispatch(action_inputValues({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            date: dateFormatInit()
        }));
    }

    if (!data_bike_storage) {
        window.location.href = "/";

    } else {
        return (

            <Col md={8} className="mx-auto mb-5">
                <Card className="card_style_container">

                    <Card.Header className="text-center card_style_header_main">
                        <h4>Please, fill the fields to complete rent.</h4>
                    </Card.Header>

                    <Card.Body>
                        <Row>
                            <Col md={6} className="mx-auto">
                                {
                                    isAlert ? (
                                        <Alert variant="danger" className="text-center">
                                            <MdNearbyError style={{ fontSize: "1.5em" }} /> <b>{txt_alert}</b>
                                        </Alert>
                                    ) : null
                                }

                                <Form onSubmit={onSubmitForm} autoComplete="off">

                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text className="ico_input"><CgNametag style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter your firstname"
                                            aria-label="Firstname"
                                            name="firstname"
                                            value={firstname}
                                            onChange={onChangeInputValues}
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text className="ico_input" ><BiBarcodeReader style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter your lastname"
                                            aria-label="Lastname"
                                            name="lastname"
                                            value={lastname}
                                            onChange={onChangeInputValues}
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text className="ico_input"><MdAlternateEmail style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter your email"
                                            aria-label="Email"
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={onChangeInputValues}
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text className="ico_input"><AiFillPhone style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter your phone"
                                            aria-label="Phone"
                                            name="phone"
                                            value={phone}
                                            onChange={onChangeInputValues}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text id="basic-addon1"><BsCalendarDate style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            type="date"
                                            placeholder="Enter Date"
                                            aria-label="Date"
                                            name="useDatePickerValue"
                                            value={useDatePickerValue}
                                            onChange={onChangeInputValuesDate}
                                        />
                                    </InputGroup>
                                    <Card className="mb-3">
                                        <div className="text-center">
                                            <Badge bg="warning" style={{ color: "black" }}>Init date: {useDatePickerValue}</Badge>
                                        </div>
                                        <Card.Body>

                                            <Card.Title style={{ fontSize: "1em" }} className="text-center mb-3">
                                                Your bike will be rented for a period of {useRentBy} day{useRentBy <= 1 ? null : "s"} for a total of ${usePriceTotalRent},00
                                            </Card.Title>

                                            <Card.Text>
                                                <b>Days to rent:</b> {useRentBy} {useRentBy <= 1 ? "day" : "days"}

                                                <Form.Range min={1} max={31} name="useRentBy" onChange={onChangeRentBy} value={useRentBy} onClick={() => calculatePrice(useDatePickerValue, useRentBy, setPriceTotalRent)} />

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <div className="d-grid gap-2">
                                        <Button className="btn2" type="submit" onMouseDown={(e) => e.preventDefault()}>
                                            Finish
                                        </Button>{' '}
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <ModalConfirm useIsOpenModal={useIsOpenModal} useModalDataDetails={useModalDataDetails} />
            </Col>
        )
    }
}

export default FormComplete;