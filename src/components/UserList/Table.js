import React from 'react'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from "react";
import { getData } from "../../utils/getData";
import './useers.css';
import { Popup } from './Add';
import EditPopup from './Edit';
import AddIcon from '@mui/icons-material/Add';
import { putStatue } from '../../utils/putStatue'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';
export const Table = () => {
    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
        },
        {
            name: 'Name',
            selector: (row) => row.name,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        },
        {
            name: 'Phone',
            selector: (row) => row.num_phone,
        },
        {
            name: 'Role',
            selector: (row) => row.role,
        },
        {
            name: 'Action',
            cell: (row) => (
                <IconButton
                    onClick={() => ChangeStatue(row.id)}
                    className={`btn ${row.statue === 'Activer' ? 'btn-success' : 'btn-danger'}`}
                    aria-label={row.statue === 'Activer' ? 'Activer' : 'Inactive'}
                    style={{ color: row.statue === 'Activer' ? 'green' : 'red' }}
                >
                    {row.statue === 'Activer' ? <CheckCircleOutline /> : <HighlightOff />}
                </IconButton>




            )
        },
        {
            name: '  ',
            cell: (row) => (
                <IconButton aria-label="Modifier" onClick={() => handleShowEdit(row.id)}>
                    <EditIcon />
                </IconButton>

            )
        }
    ];
    const [userdata, setUserData] = useState(null);
    const [data, setData] = useState([]);
    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState([]);
    //ajouter
    const [showModal, setShowModal] = useState(false);
    //modifier
    const [showEdit, setShowEdit] = useState(false);
    //ajouter
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    //modifier
    async function handleShowEdit(id) {
        setShowEdit(true);
        getData({ setData: (res) => setUserData(res), url: "users/" + id });

    };

    const handleCloseEdit = () => setUserData(null);

    useEffect(() => {
        getData({ setData, url: "users" });
    }, [])

    useEffect(() => {
        if (Array.isArray(data)) {
            const res = data.filter((item) => {
                return item.name.toLowerCase().match(recherche.toLocaleLowerCase());
            });
            setFilter(res);
        } else {
            // Handle the case where data is not an array (e.g., setFilter to an empty array)
            setFilter([]);
        }
    }, [data, recherche]);

    async function ChangeStatue(id) {
        try {
            await putStatue({ url: 'users/', id });
            getData({ setData, url: "users" });
        } catch (error) {
            // Gérer les erreurs de manière appropriée
        }
    }


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

                actions={
                    <IconButton aria-label="Ajouter" onClick={handleShow}
                        style={{
                            backgroundColor: '#FF9A8D', // couleur d'arrière-plan
                            borderRadius: '50%', // pour faire un cercle
                            width: '50px', // taille du bouton
                            height: '50px' // taille du bouton
                        }}>
                        <AddIcon style={{  color: '#4A536B'  }} />
                    </IconButton>

                }
                subHeader
                subHeaderComponent={
                    <input type='text'
                        className='w-25 form-control'
                        placeholder='Search...'
                        value={recherche}
                        onChange={(e) => setRecherche(e.target.value)} />
                }

            />
            <Popup showModal={showModal} handleClose={handleClose} />
            {

                userdata ?

                    <EditPopup handleCloseEdit={handleCloseEdit} userdata={userdata} /> : null
            }
        </div>
    )
}

