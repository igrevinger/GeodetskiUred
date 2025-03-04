import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarGeodetskiUred from './components/NavBarGeodetskiUred'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import ZaposleniciPregled from './pages/zaposlenici/ZaposleniciPregled'
import ZaposleniciDodaj from './pages/zaposlenici/ZaposleniciDodaj'

function App() {
 

  return (
    <>
      <Container>
        <NavBarGeodetskiUred />
           <Routes>
            <Route path={RouteNames.HOME} element={<Pocetna />} />
            <Route path={RouteNames.ZAPOSLENIK_PREGLED} element={<ZaposleniciPregled />} />
            <Route path={RouteNames.ZAPOSLENIK_NOVI} element={<ZaposleniciDodaj />} />
           </Routes>
        <hr />
        &copy; Grec 2024 - 2025
      </Container>  
    </>
  )
}

export default App
