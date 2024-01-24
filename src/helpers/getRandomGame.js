// import axios from "axios"
//
// async function getRandomGame(username) {
//     try {
//         const response = await axios.get(`http://localhost:8080/users/${username}/games`, {
//             'Accept': 'application/json',
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//
//         if (!Array.isArray(response.data) || response.data.length === 0) {
//             console.error('No data returned from server or no games found!')
//             return null
//         }
//
//         // Generate a random index
//         const randomIndex = Math.floor(Math.random() * response.data.length);
//
//         // Get the game at the random index
//         return response.data[randomIndex];
//     }
//     catch (error) {
//         console.error('An error occurred while fetching the game:', error)
//         return null
//     }
// }
//
// export default getRandomGame

import {instance} from "./axiosInstance.js"

async function getRandomGame(username) {
    try {
        const response = await instance.get(`/users/${username}/games`, {
            'Accept': 'application/json',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!Array.isArray(response.data) || response.data.length === 0) {
            console.error('No data returned from server or no games found!')
            return null
        }

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * response.data.length);

        // Get the game at the random index
        return response.data[randomIndex];
    }
    catch (error) {
        console.error('An error occurred while fetching the game:', error)
        return null
    }
}

export default getRandomGame