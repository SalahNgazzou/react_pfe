import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UsersPage } from '../AdminPages/UsersPage'
import { ProtectRoute } from '../../utils/protectroute'
import { BiensPage } from '../AdminPages/BiensPages'
import { ConsulteBien } from '../../components/Bienslist/ConsulterBien'
import { ProtectAdmin } from '../../utils/protectadmin'
import { BiensCourtier } from '../CourtierPages/BiensPagesCourtier'
import { Navbars } from '../../components/header/header'
import { Home } from '../Home'
import { VisiteBien } from '../visitebien/vistie'
import { Estimation } from '../estimation/estimation'
import { Recherche } from '../demandeRecherche/recherche'
import { Biens } from '../biens/biens'
import { EstimationPages } from '../SecritairePages/estimationPages'
import { ConsulterEstimation } from '../estimation/ConsulterEstimation'
import { BiensPublier } from '../AdminPages/BiensPublier'
import { ConsulteBienPublier } from '../../components/Bienslist/ConsulterBienPublier'

function Main() {

  return (
    <div>

      <BrowserRouter>
         <Navbars/> 
        <Routes>
        <Route path="/estimation/:id" element={<ConsulterEstimation />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/estimationsPage" element={<EstimationPages />} />
          <Route path="/nos_biens" element={<Biens />} />
          <Route path="/demande_de_recherche" element={<Recherche />} />
          <Route path="/visite/:id" element={<VisiteBien />} />
          <Route path="/BienPublier/:id" element={<ProtectRoute cmp={<ConsulteBienPublier />} />} />
          <Route path="/BienMasquer/:id" element={<ProtectRoute cmp={<ConsulteBien />} />} />
          <Route path="/usersPage" element={<ProtectAdmin cmp={<UsersPage />} />} />
          <Route path="/home" element={<Home />} />
          <Route path='/en_attentePage' element={<BiensPage />} />
          <Route path='/PublierPage' element={<BiensPublier />} />
          <Route path='/Courtier/Biens' element={<BiensCourtier />} />
          {/* <Route path="/Courtier/biens" element={<ConsulterBien />} /> */}
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default Main