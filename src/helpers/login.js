import axios from "axios"

async function login(username, password) {
    const response = await axios.post(`http://localhost:8080/authentication/login`, {
        username: username,
        password: password
    })
    console.log(response.data)
    return response.data;
}

export default login
