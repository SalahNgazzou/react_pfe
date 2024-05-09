import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { getData } from '../../utils/getData';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { FaEye } from 'react-icons/fa';

export const TableRecherche = () => {
    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
        },
        {
            name: 'Type',
            selector: (row) => row.type,
        },
        {
            name: 'Categorie',
            selector: (row) => row.categorie,
        },
        {
            name: 'Gouvernorat',
            selector: (row) => row.gouvernant,
        },

        {
            name: 'Consulter',
            cell: (row) => (
                <div>
                    <a href={`/recherche/${row.id}`}>
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

    useEffect(() => {
        getData({ setData, url: "recherche" });
    }, [data])

    useEffect(() => {
        if (Array.isArray(data)) {
            const res = data.filter((item) => {
                return item.type.toLowerCase().match(recherche.toLocaleLowerCase());
            });
            setFilter(res);
        } else {
            // Handle the case where data is not an array (e.g., setFilter to an empty array)
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
