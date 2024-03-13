export const getUser = () => {
    const res = localStorage.getItem("user-info")
    return JSON.parse(res).user??"";
}