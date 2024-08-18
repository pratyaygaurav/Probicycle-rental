import { Link } from "react-router-dom";

const RentalSuccess = () => {
    return (
        <>
            <span style={{ color: "#996ae9" }}>Successful rental, check in the application (localstorage)</span>
            <Link to="/">
                Home
            </Link>
        </>
    );
}


export default RentalSuccess;