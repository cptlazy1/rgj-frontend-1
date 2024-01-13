import axios from "axios"

// Todo: this function needs to accept a username, system id and image name
async function getSystemImage() {

        try {

            const response = await axios.get(`http://localhost:8080/users/porgy123/game-systems/1/download-game-system-photo/dreamcast.jpeg`, {
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
            console.error('An error occurred while fetching the system:', error)
            return []
        }
}

export default getSystemImage
