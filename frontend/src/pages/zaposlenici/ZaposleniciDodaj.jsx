import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RouteNames } from "../../constants";

export default function ZaposleniciDodaj(){

    return(
        <>
        Dodavanje zaposlenika
        <Row>
            <Col>
            <Link
            to={RouteNames.ZAPOSLENIK_PREGLED}
            className="btn btn-danger siroko"
            >Odustani
            </Link>
            </Col>
        </Row>
        </>
    )
}