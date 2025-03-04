import { useEffect, useState } from "react"
import ZaposlenikService from "../../services/ZaposlenikService"
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function ZaposleniciPregled(){

    const [zaposlenici, setZaposlenici] = useState();
    
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
            </tr>
        </thead>
        <tbody>
            {zaposlenici && zaposlenici.map((zaposlenici,index)=>(<tr>
                <td>
                  {zaposlenici.ime}
                </td>
                <td>
                  {zaposlenici.prezime}
                </td>
                <td>
                  {zaposlenici.oib}
                </td>
            </tr>))}
        </tbody>
     </Table>
     </>
    )
}