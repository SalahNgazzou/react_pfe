import { getToken } from "./getToken";

export const postData = async ({ url, data }) => {
  await fetch("http://localhost:8000/api/" + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    }
  });
}
export const postBien = async ({ url, data }) => {
  await fetch("http://localhost:8000/api/" + url, {
    method: 'POST',
    body:data,
  });
}
