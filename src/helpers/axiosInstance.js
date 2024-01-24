import axios from 'axios'

export const useCheckTokenAndRedirect = (navigate) => {
    return () => {
        const token = localStorage.getItem('token')
        const tokenTime = localStorage.getItem('tokenTime')

        if (token && tokenTime) {
            const currentTime = new Date()
            const timeDifference = currentTime - new Date(tokenTime)
            const timeDifferenceInHours = timeDifference / 1000 / 60 / 60

            if (timeDifferenceInHours >= 6) {
                localStorage.removeItem('token')
                localStorage.removeItem('tokenTime')
                navigate('/login')
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