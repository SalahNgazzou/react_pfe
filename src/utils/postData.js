import { getToken } from "./getToken";

export const postData = async ({ url, data }) => {
  const response = await fetch("http://localhost:8000/api/" + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Échec de la requête');
    }
    console.log('Opération réussie');
}
export const postBien = async ({ url, data }) => {
  await fetch("http://localhost:8000/api/" + url, {
    method: 'POST',
    body:data,
   headers:{
    'Authorization': `Bearer ${getToken()}`,
   }
  });
}
