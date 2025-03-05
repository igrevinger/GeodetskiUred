import { useEffect, useState } from "react"
import ZaposlenikService from "../../services/ZaposlenikService"
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function ZaposleniciPregled(){

    const [zaposlenici, setZaposlenici] = useState([]);
    const navigate = useNavigate();
    async function dohvatiZaposlenike(){
        const odgovor = await ZaposlenikService.get()
        setZaposlenici(odgovor)
    }

    useEffect(()=>{
        dohvatiZaposlenike();
    },[])    

    return(
       <>
       <Link
       to={RouteNames.ZAPOSLENIK_NOVI}
       className="btn btn-success siroko"
       >Dodaj novog zaposlenika
        </Link>
        <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>OIB</th>
                <th>Akcija</th>
            </tr>
        </thead>
        <tbody>
            {zaposlenici && zaposlenici.map((zaposlenik)=>{
                return (<tr>
                    <td>
                        {zaposlenik.ime}
                    </td>
                    <td>
                        {zaposlenik.prezime}
                    </td>
                    <td>
                        {zaposlenik.oib}
                    </td>
                    <td>
                        <Button
                            onClick={() => navigate(`/zaposlenici/${zaposlenik.sifra}`)}
                        >Promjena</Button>
                    </td>
                </tr>
                );
            })}
        </tbody>
     </Table>
     </>
    );
}