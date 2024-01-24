// import axios from "axios"
//
// async function deleteUser(username) {
//
//     return await axios.delete(`http://localhost:8080/admin/users/${username}`, {
//         'Accept': 'application/json',
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//     })
//     }
//
// export default deleteUser

import { instance } from './axiosInstance.js'

async function deleteUser(username) {
    return await instance.delete(`/admin/users/${username}`, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

export default deleteUser