import axios from 'axios'

export const useCheckTokenAndRedirect = (navigate) => {
    return () => {
        const token = localStorage.getItem('token')
        const tokenTime = localStorage.getItem('tokenTime')

        if (token && tokenTime) {
            const currentTime = new Date()
            const timeDifference = currentTime - new Date(tokenTime)
            const timeDifferenceInHours = timeDifference / 1000 / 60 / 60// in hours

            // check if the token is valid before making any request



            if (timeDifferenceInHours >= 48) { // 48 hours
                localStorage.removeItem('token')
                localStorage.removeItem('username')
                localStorage.removeItem('role')
                localStorage.removeItem('tokenTime')
                navigate('/log-in')
                return false
            }
        }

        return true
    }
}

export const instance = axios.create({
    baseURL: 'http://localhost:8080',
})

instance.interceptors.request.use((config) => {
    const checkTokenAndRedirect = useCheckTokenAndRedirect()

    if (!checkTokenAndRedirect()) {
        throw new axios.Cancel('Operation canceled due to expired token.')
    }

    return config
}, (error) => {
    return Promise.reject(error)
})


