export const PostEstimation = async ({ url, items }) => {
    const response = await fetch("http://localhost:8000/api/" + url, {
        method: 'POST',
        body: JSON.stringify(items),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Échec de la requête');
      }
      console.log('Opération réussie');
  }