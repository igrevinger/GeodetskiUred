import { HttpService } from "./HttpService";


async function get(){
    return await HttpService.get('/Zaposlenik')
    .then((odgovor)=>{
        //console.table(odgovor.data)
        return odgovor.data;
    })
    .catch((e)=>{})
}

async function dodaj(zaposlenik) {
    return HttpService.post('/Zaposlenik',zaposlenik)
    .then(()=>{return{greska: false, poruka: 'Dodano'}})
    .catch(()=>{return {greska: true, poruka: 'Problem kod dodavanja'}})    
    
}



export default{
    get,
    dodaj
}