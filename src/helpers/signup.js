import axios from "axios"

async function signup(username, password, email) {
    const response = await axios.post(`http://localhost:8080/authentication/register`, {
        username: username,
        password: password,
        email: email
    })
    localStorage.setItem("username", username)
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("tokenTime", new Date().toISOString())
    return response.data
}

export default signup