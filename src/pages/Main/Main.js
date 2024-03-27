import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../Login'
import { UsersPage } from '../AdminPages/UsersPage'
import { ProtectRoute } from '../../utils/protectroute'
import { ConsulterBien } from '../CourtierPages/ConsulterBiens'
import { BiensPage } from '../AdminPages/BiensPages'
function Main() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Users" element={<ProtectRoute cmp={<UsersPage />} />} />
          <Route path="/" element={<Login />} />
          <Route path='/Admin/Biens' element={<BiensPage />} />
          <Route path="/Courtier/biens" element={<ConsulterBien />} />
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default Main