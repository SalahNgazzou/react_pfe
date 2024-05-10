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
import { ConsulterRecherche } from '../demandeRecherche/ConsulterRecherche'
import { RecherchePages } from '../SecritairePages/recherchePages'
import { Conatct } from '../Contact/Conatct'
import { ContactsPage } from '../SecritairePages/contactsPage'
import { ConsulterContact } from '../Contact/consulterContact'
import {GraphComponent} from '../../components/BiComponant/bi'
import { Tableau_de_bord } from '../../components/BiComponant/Tableau de bord'
import { Dashboard } from '@mui/icons-material'
import { CommentairPage } from '../CourtierPages/CommentairPages'
import { ConsulterCommentair } from '../Commentaire/ConsulterCommentair'

function Main() {

  return (
    <div>

      <BrowserRouter>
        
        <Routes>
          <Route path="/estimation/:id" element={<ConsulterEstimation />} />
          <Route path="/recherche/:id" element={<ConsulterRecherche />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/estimationsPage" element={<EstimationPages />} />
          <Route path="/recherchesPage" element={<RecherchePages />} />
          <Route path="/nos_biens" element={<Biens />} />
          <Route path="/demande_de_recherche" element={<Recherche />} />
          <Route path="/visite/:id" element={<VisiteBien />} />
          <Route path="/commentaire/:id" element={<ConsulterCommentair />} />
          <Route path="/BienPublier/:id" element={<ProtectRoute cmp={<ConsulteBienPublier />} />} />
          <Route path="/BienMasquer/:id" element={<ProtectRoute cmp={<ConsulteBien />} />} />
          <Route path="/usersPage" element={<ProtectAdmin cmp={<UsersPage />} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact/:id" element={<ConsulterContact />} />
          <Route path='/en_attentePage' element={<BiensPage />} />
          <Route path='/Dashbored' element={<Tableau_de_bord />} />
          <Route path='/commentaire' element={<CommentairPage />} />
          <Route path='/contactsPage' element={<ContactsPage />} />
          <Route path='/PublierPage' element={<BiensPublier />} />
          <Route path='/Courtier/Biens' element={<BiensCourtier />} />
          <Route path="/contact" element={<Conatct />} />
          {/* <Route path="/Courtier/biens" element={<ConsulterBien />} /> */}
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default Main