import React from 'react'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from "react";
import { getData } from "../../utils/getData";
import './useers.css';
import Popup from './Add';
import EditPopup from './Edit';
import { deleteData } from '../../utils/deleteData';



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
                <button className='btn btn-danger' onClick={() => Supprimer(row.id)}>Delete</button>
            )
        },
        {
            name: '  ',
            cell: (row) => (
                <button className='btn btn-info' onClick={() => handleShowEdit(row.id)}>Edit</button>
            )
        }
    ];
    const [userdata, setUserData] = useState();
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


    async function Supprimer(id) {
        deleteData({ url: "users", id })
        getData({ setData, url: "users" });
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
                    <button className='btn btn-success' onClick={handleShow} >
                        Add User
                    </button>
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

                !userdata ? null

                    : <EditPopup handleCloseEdit={handleCloseEdit} userdata={userdata} />
            }
        </div>
    )
}

