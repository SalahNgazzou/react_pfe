import React, { useEffect, useState } from 'react'
import { getToken } from '../../utils/getToken';

export default function BienEnCour() {
    const [data, setData] = useState(null);
    useEffect(() => {
        // Fonction pour récupérer les données
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/bi/bien_encours', {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`, // Remplacez par votre jeton
                        'Content-Type': 'application/json'
                    }
                });
                const result = await response.json();
                setData(result);
                
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
                
            }
        };

        fetchData();
    }, []); 
  return (
    <div>
        
        <h4>Biens En Cours : {data} </h4>
        
    </div>
  )
}
