import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import ZaposlenikService from "../../services/ZaposlenikService";
import { useEffect, useState } from "react";

export default function ZaposleniciPromjena()
{

    const navigate = useNavigate();
    const [zaposlenik,setZaposlenik] =useState({});
    const routeParams = useParams();

    async function dohvatiZaposlenike() {
        const odgovor = await ZaposlenikService.getBySifra(routeParams.sifra)
        setZaposlenik(odgovor)
    }

    useEffect(()=>{
        dohvatiZaposlenike();
    },[])

    async function promjena(zaposlenik){
        const odgovor = await ZaposlenikService.promjena(routeParams.sifra,zaposlenik);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }

      navigate(RouteNames.ZAPOSLENIK_PREGLED)
    }  
        
    function odradiSubmit(e){ //e je event
        e.preventDefault(); //nemoj odraditi zahtjev na server po standardnom načinu

        let podaci = new FormData(e.target);

        promjena(

            {
                ime: podaci.get('ime'),
                prezime: podaci.get('prezime'),
                oib: podaci.get('oib')
            }

        );
    }

    return(
        <>
        Promjena zaposlenika
        <Form onSubmit={odradiSubmit}>

                <Form.Group controlId="ime">
                <Form.Label>Ime</Form.Label>
                <Form.Control type="text" name="ime" required
                defaultValue={zaposlenik?.ime} />
            </Form.Group>

            <Form.Group controlId="prezime">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" name="prezime" required
                defaultValue={zaposlenik?.prezime} />
            </Form.Group>

            <Form.Group controlId="oib">
                <Form.Label>OIB</Form.Label>
                <Form.Control type="text" name="oib" required
                defaultValue={zaposlenik?.oib} />
            </Form.Group>

            <hr/>

            <Row>
            <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                <Link
                    to={RouteNames.ZAPOSLENIK_PREGLED}
                    className="btn btn-danger siroko"
                    >Odustani
                </Link>
            </Col>

            <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
               <Button variant="success" type="submit" className="siroko">
                Promjeni zaposlenika
               </Button>
            </Col>

            </Row>

        </Form>
        </>
    )
}