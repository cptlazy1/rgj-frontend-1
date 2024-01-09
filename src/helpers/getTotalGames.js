import axios from "axios"

async function getGamesCount() {
    try {
        const response = await axios.get('http://localhost:8080/admin/games',
            {
                'Accept': 'application/json'
            }
        )
        return response.data.length
    } catch (error) {
        console.error('An error occurred while fetching the games:', error)
        return 0
    }
}

export default getGamesCount