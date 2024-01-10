import axios from "axios"

async function uploadSystemPhoto(username, gameID, picture) {
    const response = await axios.post(`http://localhost:8080/users/${username}/game-systems/${gameID}/upload-game-system-photo`, picture)
    console.log(response.data)
    return response.data;
}

export default uploadSystemPhoto