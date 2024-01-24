import {instance} from "./axiosInstance.js"

async function getProfileImage(username) {

    try {
        const response = await instance.get(`/users/${username}/download-pp`, {
            // server will be sending binary data
            responseType: "blob",
            'headers': {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return []
        }

        return response.data

    } catch (error) {
        console.error('An error occurred while fetching the profile image:')
        return []
    }
}

export default getProfileImage