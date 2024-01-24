// import axios from "axios"
//
// async function changeEmail(username, newEmail) {
//
//         const response = await axios.put(`http://localhost:8080/users/${username}/change-email`, {
//             newEmail
//         }, {
//             'Accept': 'application/json',
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//         return response.data
//
// }
// export default changeEmail

import { instance } from './axiosInstance.js'

async function changeEmail(username, newEmail) {
    const response = await instance.put(`/users/${username}/change-email`, {
        newEmail
    }, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
}

export default changeEmail