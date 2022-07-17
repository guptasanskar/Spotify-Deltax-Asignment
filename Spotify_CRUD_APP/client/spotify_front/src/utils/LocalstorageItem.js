export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    if (user) {
        const userObj = JSON.parse(user);
        return userObj;
    }
    return null;
    }
    export const getTokenFromLocalStorage = () => {
        const user = localStorage.getItem("user");
    if (user) {
        const userObj = JSON.parse(user);
        return userObj.token;
    }
    return null;
    }
        