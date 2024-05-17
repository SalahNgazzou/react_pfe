import React from 'react'
import { GraphComponent } from './bi'
import './TableDeBord.css'
import { TypeDemander } from './typeDemander'
import { PlusLouer } from './plus_louer'
import { PieChart } from './pie'
import BienEnCour from './bienencour'
import BienAvender from './bienavendre'
import BienAlouer from './bienalouer'
export const Tableau_de_bord = () => {
  return (
    <div className='dashborad'>
      <div className='biens'>
        <div className='total_bien'>
         <BienEnCour/>
        </div>
        <div className='total_a_louer'>
          <BienAvender/>
        </div>
        <div className='total_a_vendre'>
         <BienAlouer/>
        </div>
      </div>
      <div className='bien_vendu'>
        <GraphComponent />
        <PlusLouer />
      </div>
      <div className='type_demender'>
        <TypeDemander />
        <PieChart />
      </div>
    </div>
  )
}
