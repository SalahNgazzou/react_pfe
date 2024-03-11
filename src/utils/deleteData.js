import { getToken } from "./getToken";

 export const deleteData = async ({setData,url,id}) => {
    let result = await fetch('http://localhost:8000/api/'+ url +'/'+ id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                "Content-Type": 'application/json',
                "Accept": 'application/json'
              }
        });
        result = await result.json();
    setData&&setData(result)
}