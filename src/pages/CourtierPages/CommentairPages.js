import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { TableCommentaire } from '../../components/CommentairsListe/TableCommentaires';

export const CommentairPage=()=> {
    return (
        <div>
            <Sidebar />
            <TableCommentaire/>
        </div>
    )
}

