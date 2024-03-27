import React from 'react'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import  {Biens}  from './AddBiens'
import { getData } from '../../utils/getData';


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
            name: 'Ajouter Par',
            selector: (row) => row.user_name + " " + row.user_lastName,

        },

    ];
  
    const [data, setData] = useState([]);
    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState([]);
    //ajouter
    const [showModal, setShowModal] = useState(false);
    //modifier
   
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    console.log(showModal)
    //modifier
    /*   async function handleShowEdit(id) {
          setShowEdit(true);
         
      }; */

    /*  const handleCloseEdit = () => setUserData(null);
  */
    useEffect(() => {
        getData({ setData, url: "getbiens" });
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
        </div>
    )
}

