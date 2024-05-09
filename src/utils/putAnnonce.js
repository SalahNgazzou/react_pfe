import { getToken } from "./getToken";

export const putAnnonce = async ({ url, id }) => {
    try {
        const response = await fetch('http://localhost:8000/api/' + url + '/' + id, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        });

        // Vérifier si la requête a réussi (status HTTP 200-299)
        if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour de l\'annonce');
        }

        // Extraire les données JSON de la réponse
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'annonce:', error);
        throw error; // Renvoyer l'erreur pour la gestion ultérieure
    }
}
