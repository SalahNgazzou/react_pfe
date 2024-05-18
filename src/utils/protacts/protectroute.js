// Importation des modules nécessaires depuis React
import {React, useEffect} from 'react';
// Importation du hook useNavigate pour la navigation
import { useNavigate } from 'react-router-dom';

// Définition du composant Protect qui protège l'accès à d'autres composants
export const ProtectRoute=({ cmp })=> {
    // Utilisation du hook useNavigate pour effectuer la navigation
    const navigate = useNavigate();

    useEffect (() => {
        // Vérification de la présence d'informations utilisateur dans le stockage local
        if (!localStorage.getItem('user-info')) {
            // Redirection vers la page d'inscription si les informations utilisateur ne sont pas présentes
            navigate("/");
        }
    }, [navigate])
    // Rendu du composant Protect
    return (
        <div>
            {/* Affichage du composant passé en tant que propriété (cmp) */}
            <p>{cmp}</p>
        </div>
    );
}



