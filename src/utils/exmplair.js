//import { getToken } from "./getToken";

export const Examplair = async ({ setData, url }) => {
    try {
        const response = await fetch(`http://localhost:8000/api/${url}`, {
            method: 'GET',
            headers: {
                //'Authorization': `Bearer ${getToken()}`,
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log(data);
        // Limiter aux trois premiers biens
        const limitedData = data.slice(0, 3);
        setData(limitedData);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Gérer l'erreur, par exemple en définissant un état d'erreur ou en affichant un message à l'utilisateur
    }
};
