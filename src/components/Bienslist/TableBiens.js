import React from 'react'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Biens } from './AddBiens'
import { getData } from '../../utils/getData';
import Edit_biens from './Edit';
import EditIcon from '@mui/icons-material/Edit';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';
import { putAnnonce} from '../../utils/putAnnonce';

export const Table = () => {
    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
        },
        {
            name: 'Type',
            selector: (row) => row.type_biens,
        },
        {
            name: 'Categorie',
            selector: (row) => row.categorie,
        },
        {
            name: 'Disponibilté',
            selector: (row) => row.disponibilté,
        },
        {
            name: 'Action',
            cell: (row) => (
                <IconButton
                    onClick={() => ChangeStatue(row.id)}
                    className={`btn ${row.annonce === 'Publier' ? 'btn-success' : 'btn-danger'}`}
                    aria-label={row.statue === 'Publier' ? 'Publier' : 'Masquer'}
                    style={{ color: row.statue === 'Publier' ? 'green' : 'red' }}
                >
                    {row.statue === 'Publier' ? <CheckCircleOutline /> : <HighlightOff />}
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

    const [data, setData] = useState([]);
    const [userdata, setUserData] = useState();
    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState([]);
    //ajouter
    const [showModal, setShowModal] = useState(false);
    //modifier

    const handleShow = () => setShowModal(true);
    const [showEdit, setShowEdit] = useState(false);
    const handleClose = () => setShowModal(false);
    console.log(showModal)

    useEffect(() => {
        getData({ setData, url: "biens" });
    }, [])

    useEffect(() => {
        if (Array.isArray(data)) {
            const res = data.filter((item) => {
                return item.type_biens.toLowerCase().match(recherche.toLocaleLowerCase());
            });
            setFilter(res);
        } else {
            // Handle the case where data is not an array (e.g., setFilter to an empty array)
            setFilter([]);
        }
    }, [data, recherche]);

    async function handleShowEdit(id) {
        setShowEdit(true);
        getData({ setData: (res) => setUserData(res), url: "biens/" + id });
    };

    const handleCloseEdit = () => setUserData(null);

    async function ChangeStatue(id) {
        try {
            await putAnnonce({ url:"biens/", id });
            getData({ setData, url: "biens" });
        } catch (error) {
            // Gérer les erreurs de manière appropriée
        }
    }

    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: '14px',
                backgroundColor: "#4A536B",
                color: "white"
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
                        <AddIcon style={{ color: 'white' }} />
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
            <Biens showModal={showModal} handleClose={handleClose} />
            {

                !userdata ? null

                    : <Edit_biens handleCloseEdit={handleCloseEdit} userdata={userdata} />
            }
        </div>
    )
}

