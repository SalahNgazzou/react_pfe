import React from 'react'
import { TableRecherche } from '../../components/recherche_liste/TableRecherch'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const RecherchePages=()=> {
  return (
    <div>
        <Sidebar />
      <TableRecherche />
    </div>
  )
}
