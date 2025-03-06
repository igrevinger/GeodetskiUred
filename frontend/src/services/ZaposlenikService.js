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

async function promjena(sifra,zaposlenik) {
    return HttpService.put('/zaposlenik/' +sifra,zaposlenik)
    .then(()=>{return{greska: false, poruka: 'Dodano'}})
    .catch(()=>{return {greska: true, poruka: 'Problem kod promjene'}})    
    
}

async function obrisi(sifra) {
    return HttpService.delete('/zaposlenik/' +sifra)
    .then(()=>{return{greska: false, poruka: 'Obrisano'}})
    .catch(()=>{return {greska: true, poruka: 'Problem kod brisanja'}})    
    
}

export default{
    get,
    getBySifra,
    dodaj,
    promjena,
    obrisi
}