import {instance} from "./axiosInstance.js"

async function getUsers() {
    try {
        const response = await instance.get("/admin/users", {
            'Accept': 'application/json',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return []
        }
        return response.data;

    } catch (error) {
        console.error('An error occurred while fetching the users:', error)
        return []
    }

}
export default getUsers