import { getToken } from "./getToken";

export const putStatue = async ({ url, id }) => {
    try {
        let result = await fetch('http://localhost:8000/api/' + url + id, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        });
        if (!result.ok) {
            throw new Error('Erreur lors de la mise à jour du statut du compte.');
        }
        return result.json();
    } catch (error) {
        console.error('Erreur lors de la mise à jour du statut du compte :', error);
        throw error;
    }


}


