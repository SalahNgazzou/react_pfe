import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { TableBiensPublier } from '../../components/Bienslist/TableBiensPublier';


export const BiensPublier=()=> {
    return (
        <div>
            <Sidebar />
            <TableBiensPublier/>
        </div>
    )
}