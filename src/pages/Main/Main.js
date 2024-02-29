import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../Login'
import { Sidebar } from '../../components/Sidebar'
import Table from '../UserList/Table'



function Main() {
  return (
    <div>
     
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default Main