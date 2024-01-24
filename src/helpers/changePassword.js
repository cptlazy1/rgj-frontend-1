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