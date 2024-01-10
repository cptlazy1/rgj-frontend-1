import axios from "axios"

async function addSystem(username, system) {
    const response = await axios.post(`http://localhost:8080/users/${username}/game-systems`, system)
    console.log(response.data)
    return response.data;
}

export default addSystem
