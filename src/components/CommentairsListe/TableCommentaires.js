import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { getData } from '../../utils/getData';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { FaEye } from 'react-icons/fa';
import { getUser } from '../../utils/getUser';

export const TableCommentaire = () => {
    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
        },
        {
            name: 'Nom',
            selector: (row) => row.nom_prenom,
        },
        {
            name: 'Téléphone',
            selector: (row) => row.telephone,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        },

        {
            name: 'Consulter',
            cell: (row) => (
                <div>
                    <a href={`/commentaire/${row.id}`}>
                        <IconButton aria-label="Consulter">
                            <FaEye />
                        </IconButton>
                    </a>
                </div>
            )
        }
    ];

    const [data, setData] = useState([]);
    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState([]);
    const [user, setUser] = useState(getUser());
    const id=user.id
    useEffect(() => {
        if(user && user.role==='Admin'){
            getData({ setData, url: "commentaires" });
        }else{
            getData({ setData, url: `commentaires/${id}` });
        }
       
    }, [data])

    useEffect(() => {
        if (Array.isArray(data)) {
            const res = data.filter((item) => {
                const type_biens = item.nom_prenom || ''; // Assurez-vous que type_biens est défini ou utilisez une chaîne vide par défaut
                return type_biens.toLowerCase().includes(recherche.toLowerCase()); // Utilisez includes() pour vérifier si la chaîne contient la recherche
            });
            setFilter(res);
        } else {
            // Gérez le cas où data n'est pas un tableau (par exemple, setFilter à un tableau vide)
            setFilter([]);
        }
    }, [data, recherche]);

    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: '14px',
                backgroundColor: "#FF9A8D",
                color: "#4A536B"
            },
        },
    }
    return (
        <div className='myDataTableContainer'>
            <DataTable
                columns={columns}
                data={filter}
                customStyles={tableHeaderstyle}
                pagination
                striped
                selectableRows
                fixedHeader
                selectableRowsHighlight
                highlightOnHover

                subHeader
                subHeaderComponent={
                    <input
                        type='text'
                        className='w-25 form-control'
                        placeholder='Search...'
                        value={recherche}
                        onChange={(e) => setRecherche(e.target.value)}
                    />
                }

            />

        </div>
    )
}
