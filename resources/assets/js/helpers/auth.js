export function login(credentials){
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then( response => {
                res(response.data);
            })
            .catch( err => {
                rej("Something wrong happened during login");
            });
    });
}


export function register(credentials){
    return new Promise((res, rej) => {
        axios.post('/api/auth/register', credentials)
            .then( response => {
                res(response.data);
            })
            .catch( err => {
                rej("Something wrong happened during register");
            });
    });
}

export function getLocalUser(){
    const userStr = localStorage.getItem("user");
    if(!userStr) return null;

    return JSON.parse(userStr);
}