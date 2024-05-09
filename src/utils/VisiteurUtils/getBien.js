export const getBien = async ({ setData, url }) => {
    try {
        const response = await fetch(`http://localhost:8000/api/${url}`, {
            method: 'GET',
            headers: {
               
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log(data);
       
        setData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
       
    }
};