import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UsersPage } from '../AdminPages/UsersPage'
import { ProtectRoute, ProtectSecretaire } from '../../utils/protacts/protectSecretaire'
import { BiensPage } from '../AdminPages/BiensPages'
import { ConsulteBien } from '../../components/Bienslist/ConsulterBien'
import { ProtectAdmin } from '../../utils/protacts/protectadmin'
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
import { GraphComponent } from '../../components/BiComponant/bi'
import { Tableau_de_bord } from '../../components/BiComponant/Tableau de bord'
import { Dashboard } from '@mui/icons-material'
import { CommentairPage } from '../CourtierPages/CommentairPages'
import { ConsulterCommentair } from '../Commentaire/ConsulterCommentair'
import { ProtectCourtierAdmin } from '../../utils/protacts/protectCourtierAdmin'
import { ProtectCourtierSecretaire } from '../../utils/protacts/protectCourtierSecretaire'

function Main() {

  return (
    <div>

      <BrowserRouter>

        <Routes>
          {/* <Route path="/recherche" element={<Recherche />} /> */}
          {/* <Route path='/Courtier/Biens' element={<ProtectCourtier cmp={<BiensCourtier />} />} /> */}
          {/* <Route path="/Courtier/biens" element={<ConsulterBien />} /> */}

          {/*  admin */}
          <Route path="/usersPage" element={<ProtectAdmin cmp={<UsersPage />} />} />
          <Route path='/Dashbored' element={<ProtectAdmin cmp={<Tableau_de_bord />} />} />
          {/* secrétaire */}
          <Route path="/contact/:id" element={<ProtectSecretaire cmp={<ConsulterContact />} />} />
          <Route path="/estimation/:id" element={<ProtectSecretaire cmp={<ConsulterEstimation />} />} />
          <Route path="/estimationsPage" element={<ProtectSecretaire cmp={<EstimationPages />} />} />
          <Route path='/contactsPage' element={<ProtectSecretaire cmp={<ContactsPage />} />} />
          {/*   courtier / admin */}
          <Route path="/commentaire/:id" element={<ProtectCourtierAdmin cmp={<ConsulterCommentair />} />} />
          <Route path="/BienPublier/:id" element={<ProtectCourtierAdmin cmp={<ConsulteBienPublier />} />} />
          <Route path="/BienMasquer/:id" element={<ProtectCourtierAdmin cmp={<ConsulteBien />} />} />
          <Route path='/PublierPage' element={<ProtectCourtierAdmin cmp={<BiensPublier />} />} />
          <Route path='/en_attentePage' element={<ProtectCourtierAdmin cmp={<BiensPage />} />} />
          <Route path='/commentaire' element={<ProtectCourtierAdmin cmp={<CommentairPage />} />} />
          {/* courtier/secrétaire */}
          <Route path="/recherche/:id" element={<ProtectCourtierSecretaire cmp={<ConsulterRecherche />} />}/>
          <Route path="/recherchesPage" element={<ProtectCourtierSecretaire cmp={<RecherchePages />} />}/>
          {/* visiteur */}
          <Route path="/contact" element={<Conatct />} />
          <Route path="/visite/:id" element={<VisiteBien />} />
          <Route path="/" element={<Home />} />
          <Route path="/demande_de_recherche" element={<Recherche />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/nos_biens" element={<Biens />} />

        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default Main