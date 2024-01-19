import axios from "axios"

async function getUsers() {
    try {
        const response = await axios.get("http://localhost:8080/admin/users", {
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