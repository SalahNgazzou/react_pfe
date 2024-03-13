import { getToken } from "./getToken";

 export const putData = async ({url,data,id}) => {
    await fetch("http://localhost:8000/api/"+url+"/"+id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });
}