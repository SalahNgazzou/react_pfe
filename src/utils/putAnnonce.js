import { getToken } from "./getToken";

export const putAnnonce = async ({ url, id }) => {
   
        let result =  fetch('http://localhost:8000/api/' + url +'/'+ id, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        });
       
        return result.json();
   


}