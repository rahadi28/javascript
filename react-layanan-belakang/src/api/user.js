export function getUsers() {
    /* return fetch('http://localhost:3000/users', {
        method: 'GET'
    }); */

    return fetch(process.env.REACT_APP_WS_URL + '/users', {
        method: 'GET'
    });
}

const user = {name: "Rahadi Oemar", email: "hello.oemar@yahoo.com", gender:true, phoneNumber:"0987654321"}

export function addUser() {
    return fetch(process.env.REACT_APP_WS_URL + '/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    });
}