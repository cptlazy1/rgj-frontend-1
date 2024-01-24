// import axios from "axios"
//
// async function addGame(username, game) {
//     const response = await axios.post(`http://localhost:8080/users/${username}/games`, game, {
//         'Accept': 'application/json',
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//     })
//     console.log(response.data)
//     return response.data;
// }
//
// export default addGame

import { instance } from './axiosInstance.js'

async function addGame(username, game) {
    const response = await instance.post(`/users/${username}/games`, game, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data;
}

export default addGame