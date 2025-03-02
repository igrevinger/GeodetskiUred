import { useEffect } from "react"
import ZaposlenikService from "../../services/ZaposlenikService"


export default function ZaposleniciPregled(){
    
    async function dohvatiZaposlenike(){
        const odgovor = ZaposlenikService.get()
    }

    useEffect(()=>{
        dohvatiZaposlenike();
    },[])    

    return(
    <>
    Ovdje će se vidjeti zaposlenici iz baze
    </>
    )


}