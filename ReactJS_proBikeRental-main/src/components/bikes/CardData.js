import { Link } from "react-router-dom";
import { GrBike } from "react-icons/gr";
import { Card, Button, Image } from "react-bootstrap";

const CardData = (props) => {

    const { data } = props;

    const onStoredData = (e) => {
        localStorage.setItem('data_bike_storage', JSON.stringify({
            id: e.id,
            bike_type: e.bike_type,
            name_bike: e.name_bike
        }));
    }

    return (

        <Card className="h-100 card_item_content">

            <Card.Header>
                <h5 style={{ color: "#e77c59", borderRadius: "25px", background: "#25121f" }}><GrBike /> {data.bike_type}</h5>
            </Card.Header>

            <Image className=" h-100 card_img_item" fluid={true} thumbnail={true} src={data.image_bike} alt={data.name_bike} />

            <Card.Body>
                <Card.Title style={{ color: "#9796ab" }}>{data.name_bike}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>

                <Link to={`/complete-rent/${data.id}`} style={{ textDecoration: "none" }} onClick={() => onStoredData(data)} >
                    <div className="d-grid gap-2">
                        <Button className="btn1" onMouseDown={(e) => e.preventDefault()}  >
                            Ready?
                        </Button>{' '}
                    </div>
                </Link>

            </Card.Body>
        </Card>
    );
}

export default CardData;