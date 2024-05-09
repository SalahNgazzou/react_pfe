import React from 'react'
import { TableContact } from '../../components/Contact/TableContact'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const ContactsPage=()=> {
  return (
    <div>
          <Sidebar />
          <TableContact/>
    </div>
  )
}
