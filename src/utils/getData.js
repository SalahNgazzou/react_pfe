import { getToken } from "./getToken";

 export const getData = async ({setData,url}) => {
    let result = await fetch("http://localhost:8000/api/"+url,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            "Content-Type": 'application/json',
            "Accept": 'application/json'
          }
    });
    result = await result.json();
    setData(result)
}