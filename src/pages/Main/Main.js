import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Log_in } from '../Login'
import { UsersPage } from '../AdminPages/UsersPage'
import { ProtectRoute } from '../../utils/protectroute'
import { BiensPage } from '../AdminPages/BiensPages'
import {ConsulteBien} from '../../components/Bienslist/ConsulterBien'
import {Header} from '../../components/common/header'
import {ProtectAdmin} from '../../utils/protectadmin'
import{BiensCourtier}from '../CourtierPages/BiensPagesCourtier'

function Main() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/Bien/:id" element={<ProtectRoute cmp={<ConsulteBien />} />} />
          <Route path="/Users" element={<ProtectAdmin cmp={<UsersPage />} />} />
          <Route path="/" element={<Log_in />} />
          <Route path="/nav" element={<Header />} />
          <Route path='/Admin/Biens' element={<BiensPage />} />
          <Route path='/Courtier/Biens' element={<BiensCourtier />} />
          {/* <Route path="/Courtier/biens" element={<ConsulterBien />} /> */}
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default Main