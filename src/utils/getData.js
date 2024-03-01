 export const getData = async ({setData,url}) => {
    let result = await fetch("http://localhost:8000/api/"+url);
    result = await result.json();
    setData(result)
}