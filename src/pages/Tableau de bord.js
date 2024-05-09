import React from 'react'
import GraphComponent from '../components/BiComponant/bi'
import './TableDeBord.css'
import { TypeDemander } from '../components/BiComponant/typeDemander'
export const Tableau_de_bord=() =>{
  return (
    <div className='dashborad'>
        <div className='biens'>
<GraphComponent/>
        </div>
        <div className='type_demender'>
<TypeDemander/>
        </div>
    </div>
  )
}
