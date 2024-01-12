import axios from "axios"

async function getGameImage() {

    try {
        const response = await axios.get(`http://localhost:8080/users/porgy123/games/2/download-game-photo/Samurai_Shodown_II_Box_Art.jpg`, {
            // server will be sending binary data
            responseType: "blob"
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return []
        }
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.error('An error occurred while fetching the game:', error)
        return []
    }

}

export default getGameImage