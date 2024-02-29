 export const deleteData = async ({setData,url,id}) => {
    let result = await fetch('http://localhost:8000/api/'+ url +'/'+ id, {
            method: 'DELETE'
        });
        result = await result.json();
    setData&&setData(result)
}