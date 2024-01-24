import {instance} from "./axiosInstance.js"

async function getGamesCount() {
    try {
        const response = await instance.get('/games',
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