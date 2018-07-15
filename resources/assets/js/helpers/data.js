export function list(){
    return new Promise((res, rej) => {
        axios.get('/api/users')
            .then( response => {
                res(response.data);
            })
            .catch( err => {
                rej("Something wrong happened during login");
            });
    });
}