import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Tableau_de_bord } from '../components/BiComponant/Tableau de bord'

export const Dashborad=()=> {
  return (
    <div>
        <Sidebar/>
        <Tableau_de_bord/>
    </div>
  )
}
