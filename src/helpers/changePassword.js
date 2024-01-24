// import axios from "axios"
//
// async function changePassword(username, oldPassword, newPassword) {
//
//     const response = await axios.put(`http://localhost:8080/users/${username}/change-password`, {
//         oldPassword,
//         newPassword
//     }, {
//         'Accept': 'application/json',
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//     })
//     return response.data
// }
//
// export default changePassword

import { instance } from './axiosInstance.js'

async function changePassword(username, oldPassword, newPassword) {
    const response = await instance.put(`/users/${username}/change-password`, {
        oldPassword,
        newPassword
    }, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
}

export default changePassword