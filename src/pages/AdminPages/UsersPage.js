import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import {Table} from '../../components/UserList/Table';

export const UsersPage=()=> {
    return (
        <div>
            <Sidebar />
            <Table/>
        </div>
    )
}

