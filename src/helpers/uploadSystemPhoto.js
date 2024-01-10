import axios from "axios"

async function uploadSystemPhoto(username, gameID, photo) {
    const response = await axios.post(`http://localhost:8080/users/${username}/game-systems/${gameID}/upload-game-system-photo`, photo)
    console.log(response.data)
    return response.data;
}

export default uploadSystemPhoto