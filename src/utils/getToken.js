export const getToken = () => {
    const res = localStorage.getItem("user-info")//user info heki tetbadel enti ou chnoua msemeha iraja3lek
    return JSON.parse(res).access_token??"";
}