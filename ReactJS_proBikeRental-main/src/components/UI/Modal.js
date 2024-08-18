import { BsUiChecksGrid } from "react-icons/bs";
import { Button, Modal, Card, ListGroup } from "react-bootstrap";

export const ModalConfirm = (props) => {

    const date = new Date();

    const { useIsOpenModal, useModalDataDetails } = props;

    const onCancelRental = () => {
        localStorage.removeItem("data_bike_storage");
        window.location.href = "/";
    }

    const onConfirmRental = () => {
        window.location.href = "/success";
    }

    return (
        <>
            <Modal
                size="sm"
                show={useIsOpenModal}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header className=' card_style_header_main' >
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Confirm your rent
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="card_style_container">

                    <div className="text-center" >
                        <BsUiChecksGrid style={{ fontSize: "5em", color: "white" }} />

                        <hr />
                        <Card className="card_item_content">
                            <Card.Header><b>Detail of your rental</b></Card.Header>
                            <ListGroup variant="flush" className="text-start ">
                                <ListGroup.Item className='li_style'><b>Date:</b> {String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear()}</ListGroup.Item>
                                <ListGroup.Item className='li_style'><b>Bike:</b>  {useModalDataDetails.bike_type} - {useModalDataDetails.name_bike} </ListGroup.Item>
                                <ListGroup.Item className='li_style'><b>Days:</b> {useModalDataDetails.rentBy}</ListGroup.Item>
                                <ListGroup.Item className='li_style'><b>Price total:</b> ${useModalDataDetails.price_total},00</ListGroup.Item>
                                <ListGroup.Item className='li_style'><b>To name:</b>  {useModalDataDetails.firstname + " " + useModalDataDetails.lastname}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Modal.Body>

                <Modal.Footer className="card_style_header_main">
                    <Button variant="danger" onClick={onCancelRental} onMouseDown={(e) => e.preventDefault()}>Cancel</Button>
                    <Button variant="success" onClick={onConfirmRental} onMouseDown={(e) => e.preventDefault()}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}