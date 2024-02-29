import React from 'react'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from "react";
import { getData } from "../../utils/getData";
import './useers.css';
import Popup from './add';
import EditPopup from './edit';
import { deleteData } from '../../utils/deleteData';



export default function Table() {
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
        let res = await fetch("http://localhost:8000/api/edit/" + id, {
            method: 'GET'
        });
        res = await res.json();
        setUserData(res);
console.log(userdata)
    };

    const handleCloseEdit = () => setUserData(null);

    useEffect(() => {
        getData({ setData, url: "liste" });
    }, [])

    useEffect(() => {
        const res = data.filter((item) => {
            return item.name.toLowerCase().match(recherche.toLocaleLowerCase())
        });
        setFilter(res);
    }, [recherche])

    async function Supprimer(id) {
        deleteData({ url: "liste", id })
        getData({ setData, url: "liste" });
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
                        Ajouter utlilsateur
                    </button>
                }
                subHeader
                subHeaderComponent={
                    <input type='text'
                        className='w-25form-control'
                        placeholder='Recherche...'
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

