import { useEffect, useState } from "react"
import ZaposlenikService from "../../services/ZaposlenikService"
import { Table } from "react-bootstrap";


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