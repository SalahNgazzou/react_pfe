
export const searchData = async ({ setData, url, items }) => { 
    try {
        const response = await fetch(`http://localhost:8000/api/${url}`, {
            method: 'POST',
            body: JSON.stringify(items), 
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            } 
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();

        setData(responseData); 
    } catch (error) {
        console.error('Error fetching data:', error);
       
    }
};
