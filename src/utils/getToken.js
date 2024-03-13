export const getToken = () => {
    const res = localStorage.getItem("user-info")
    return JSON.parse(res).access_token??"";
}