import { getToken } from "./getToken";

export const deleteData = async ({ url, data }) => {
    
    await fetch('http://localhost:8000/api/' + url, {
        method: 'DELETE',
        body: data,
        headers:{
            'Authorization': `Bearer ${getToken()}`,
        }
    });
}