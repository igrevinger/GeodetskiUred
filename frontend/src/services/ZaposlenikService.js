import { HttpService } from "./HttpService";


async function get(){
    return await HttpService.get('/zaposlenik')
    .then((odgovor)=>{
        //console.table(odgovor.data)
        return odgovor.data;
    })
    .catch((e)=>{})
}

async function getBySifra(sifra){
    return await HttpService.get('/zaposlenik/' + sifra)
    .then((odgovor)=>{
            return odgovor.data;
    })
    .catch((e)=>{})
}

async function dodaj(zaposlenik) {
    return HttpService.post('/zaposlenik',zaposlenik)
    .then(()=>{return{greska: false, poruka: 'Dodano'}})
    .catch(()=>{return {greska: true, poruka: 'Problem kod dodavanja'}})    
    
}



export default{
    get,
    getBySifra,
    dodaj
}