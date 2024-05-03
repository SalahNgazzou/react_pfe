import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { getData} from '../../utils/getData';
import { putAnnonce } from '../../utils/putAnnonce';


import { Biens } from './AddBiens';
import { getUser } from '../../utils/getUser';
import { getDatabyuser } from '../../utils/getDataByUser';
import { ConsulteBien } from './ConsulterBien';
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
            name: 'Statue',
            cell: (row) => (
                <IconButton
                    onClick={() => ChangeStatue(row.id)}
                    className={`btn ${row.disponibilté === 'En cours' ? 'btn-danger' : 'btn-success'}`}
                    style={{ color: row.disponibilté === 'En cours' ? 'red' : 'green' }}
                >
                    {row.disponibilté === 'En cours' ?  <HighlightOff />:<CheckCircleOutline />}
                </IconButton>
            )
        },
        {
            name: 'Modifier',
            cell: (row) => (
                <div>
                    <a href={`/bien/${row.id}`}>
                        <IconButton aria-label="Modifier">
                            <EditIcon />
                        </IconButton>
                    </a>
                </div>
            )
        }
    ];

    const [data, setData] = useState([]);
    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState();

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    useEffect(() => {
        const loggedInUser = getUser();
        setUser(loggedInUser);
        
        if (loggedInUser && loggedInUser.role === "Admin") {
            getData({ setData, url: "biens" });
        }else if (loggedInUser && loggedInUser.id) {
            // Si l'utilisateur est authentifié et a un ID, récupérez les biens par son ID
            getDatabyuser({ setData, url: `biens/BiensByUser/${loggedInUser.id}` });
        }
       
    }, []);

    useEffect(() => {
        if (Array.isArray(data)) {
            const res = data.filter((item) => {
                return item.type_biens.toLowerCase().match(recherche.toLowerCase());
            });
            setFilter(res);
        } else {
            setFilter([]);
        }
    }, [data, recherche]);

    
    const ChangeStatue = async (id) => {
        try {
            await putAnnonce({ url: "biens/changestatue", id });
            getData({ setData, url: "biens" });
        } catch (error) {
            // Gérer les erreurs de manière appropriée
        }
    };

    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: '14px',
                backgroundColor: "#FF9A8D",
                color: "#4A536B"
                
            },
        },
    };

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
                            height: '50px', // taille du bouton
                           

                        }}>
                        <AddIcon style={{ color: '#4A536B' }} />
                    </IconButton>

                }
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
            <Biens showModal={showModal} handleClose={handleClose}  />
            {/* {<ConsulteBien user={user} />}  */}
        </div>
    );
};


