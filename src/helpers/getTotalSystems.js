import axios from "axios"

async function getTotalSystems() {
    try {
        const response = await axios.get('http://localhost:8080/game-systems',
            {
                'Accept': 'application/json'
            }
        )

        return response.data.length
    } catch (error) {
        console.error('An error occurred while fetching the systems:', error)
        return 0
    }
}

export default getTotalSystems