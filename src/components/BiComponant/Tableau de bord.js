import React from 'react'
import {GraphComponent} from './bi'
import './TableDeBord.css'
import { TypeDemander } from './typeDemander'
import { PlusLouer } from './plus_louer'
import { PieChart } from './pie'
export const Tableau_de_bord=() =>{
  return (
    <div className='dashborad'>
        <div className='biens'>
<div className='total_bien'>
<h6>Biens En Cours : 10</h6>
</div>
<div className='total_a_louer'>
<h6>Biens A Vendre : 6</h6>
</div>
<div className='total_a_vendre'>
<h6>Biens A louer : 4</h6>
</div>
        </div>
        <div className='bien_vendu'>
          <GraphComponent/>
          <PlusLouer/>
        </div>
        <div className='type_demender'>
<TypeDemander/>
<PieChart/>
        </div>
    </div>
  )
}
