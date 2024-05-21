import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../getUser';

export const ProtectCourtierSecretaire=({cmp})=> {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        // Vérification de la présence d'informations utilisateur dans le stockage local
        const loggedInUser = getUser();
        setUser(loggedInUser);

        if (loggedInUser.role === "Admin" || !localStorage.getItem("user-info")) {
            navigate('/');
        }
    }, [navigate]);
  return (
    <div>
        <p>
            {cmp}
        </p>
    </div>
  )
}
