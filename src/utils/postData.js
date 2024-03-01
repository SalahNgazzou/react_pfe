 export const postData = async ({url,data}) => {
    await fetch("http://localhost:8000/api/"+url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });
}