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

function Main() {

  return (
    <div>
      
      <BrowserRouter>
      <Navbars />
        <Routes>
          <Route path="/visite/:id" element={<VisiteBien />} />
          <Route path="/Bien/:id" element={<ProtectRoute cmp={<ConsulteBien />} />} />
          <Route path="/usersPage" element={<ProtectAdmin cmp={<UsersPage />} />} />
          <Route path="/home" element={<Home />} />
          <Route path='/Admin/Biens' element={<BiensPage />} />
          <Route path='/Courtier/Biens' element={<BiensCourtier />} />
          {/* <Route path="/Courtier/biens" element={<ConsulterBien />} /> */}
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default Main