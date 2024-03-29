import './Profile.css'
import defaultProfileImage from '../assets/default profile.png'
import defaultGameRoomImage from '../assets/default game room.png'
import {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import Button from "../components/Button.jsx"
import getUsersGames from "../helpers/getUsersGames.js"
import getUsersSystems from "../helpers/getUsersSystems.js"
import getRandomGame from "../helpers/getRandomGame.js"
import getRandomSystem from "../helpers/getRandomSystem.js"
import getProfileImage from "../helpers/getProfileImage.js"
import getGameRoomImage from "../helpers/getGameRoomImage.js"
import {instance} from "../helpers/axiosInstance.js";

function Profile() {
    const [userData, setUserData] = useState(null)
    const [games, setGames] = useState([])
    const [systems, setSystems] = useState([])

    const [profilePhoto, setProfilePhoto] = useState('')
    const [gameRoomPhoto, setGameRoomPhoto] = useState('')
    const [profilePhotoPreviewURL, setProfilePhotoPreviewURL] = useState('')
    const [gameRoomPhotoPreviewURL, setGameRoomPhotoPreviewURL] = useState('')

    const {username} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error] = useState(null)
    const [message, setMessage] = useState("")



    useEffect(() => {
        if (localStorage.getItem("newUser") === "true") {
            setMessage(`Welcome to the RGJ ${username}! Please upload a profile picture and a game room picture.`)
            localStorage.removeItem("newUser")
        }
    }, [username]);




    useEffect(() => {
        const fetchProfileImage = async () => {
            setLoading(true)
            const profileImage = await getProfileImage(username)
            if (profileImage.size === 0) {
                setProfilePhoto(defaultProfileImage)
                setProfilePhotoPreviewURL(defaultProfileImage)

            } else {
                const profileImageUrl = profileImage instanceof Blob ? URL.createObjectURL(profileImage) : profileImage
                setProfilePhoto(profileImageUrl)
                setProfilePhotoPreviewURL(profileImageUrl)
            }
            setLoading(false)
        }

        void fetchProfileImage()
    }, [username])


    useEffect(() => {
        const fetchGameRoomImage = async () => {
            setLoading(true)
            const gameRoomImage = await getGameRoomImage(username)

            if (gameRoomImage.size === 0) {
                setGameRoomPhoto(defaultGameRoomImage)
                setGameRoomPhotoPreviewURL(defaultGameRoomImage)
            } else {
                const gameRoomImageUrl = gameRoomImage instanceof Blob ? URL.createObjectURL(gameRoomImage) : gameRoomImage
                setGameRoomPhoto(gameRoomImageUrl)
                setGameRoomPhotoPreviewURL(gameRoomImageUrl)
            }
            setLoading(false)
        }

        void fetchGameRoomImage()

    }, [username])



    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true)
            try {
                const response = await instance.get(`/users/${username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })

                setUserData(response.data)

                const games = await getUsersGames(response.data.username)
                const systems = await getUsersSystems(response.data.username)

                setGames(games)
                setSystems(systems)

            } catch (error) {
                console.error("Error fetching user data", error)
            }
            setLoading(false)
        }

        void fetchUserData()

    }, [username])


    if (!userData || loading) {
        return <div className="loading">Loading...</div>

    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const handleFileChange = async (event, photoType) => {
        const file = event.target.files[0]
        const fileURL = URL.createObjectURL(file)

        if (photoType === 'profile') {
            setProfilePhoto(file)
            setProfilePhotoPreviewURL(fileURL)

        } else if (photoType === 'gameRoom') {
            setGameRoomPhoto(file)
            setGameRoomPhotoPreviewURL(fileURL)

        }
    }


    const uploadFile = async (username, photoType) => {
        const formData = new FormData()

        if (photoType === 'profile') {
            formData.append("file", profilePhoto)
        } else if (photoType === 'gameRoom') {
            formData.append("file", gameRoomPhoto)
        }

        const endpoint = photoType === 'profile' ?
            `/users/${username}/upload-pp` :
            `/users/${username}/upload-grp`;

        try {
            const response = await instance.post(endpoint, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            if (photoType === 'profile') {
                setProfilePhoto(response.data.profilePhotoData)
                if (response.data.profilePhotoData instanceof Blob) {
                    setProfilePhotoPreviewURL(URL.createObjectURL(response.data.profilePhotoData))
                } else {
                    setProfilePhotoPreviewURL(response.data.profilePhotoData)
                }
            } else if (photoType === 'gameRoom') {
                setGameRoomPhoto(response.data.gameRoomPhotoData)
                if (response.data.gameRoomPhotoData instanceof Blob) {
                    setGameRoomPhotoPreviewURL(URL.createObjectURL(response.data.gameRoomPhotoData))
                } else {
                    setGameRoomPhotoPreviewURL(response.data.gameRoomPhotoData)
                }
            }

        } catch (error) {
            console.error(`Error uploading ${photoType} photo`, error)
        }
    }

    const handleSubmit = async (photoType) => {
        try {
            await uploadFile(username, photoType)
            window.location.reload()
        } catch (error) {
            console.error(`Error uploading ${photoType} photo`, error)
        }
    }


    return (
        <div className="outer-profile-container">
            <h1 className="">{message ? message : "Welcome " + username}</h1>
            <div className="profile-container">

                <div className="profile-inner-left-container">

                    <div className="profile-picture">
                        <label className="profile-label">{userData.username}</label>
                        <img src={profilePhotoPreviewURL ? profilePhotoPreviewURL : defaultProfileImage}
                             alt="gamer profile picture"/>
                        <input
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            onChange={(event) => handleFileChange(event, 'profile')}/>
                        <Button text="Upload profile picture" onClick={() => handleSubmit('profile')}/>
                    </div>

                    <section className="counters-container-profile">
                        <div className="total-games">
                            <label className="counter-label">Total games</label>
                            <p className="counter">
                                {games && games.length > 0 ? games.length.toString().padStart(10, '0') : '0000000000'}
                            </p>
                        </div>

                        <div className="total-systems">
                            <label className="counter-label">Total systems</label>
                            <p className="counter">
                                {systems && systems.length > 0 ? systems.length.toString().padStart(10, '0') : '0000000000'}
                            </p>
                        </div>
                    </section>

                    <div className="buttons-container-profile-a">
                        <Button text="Account Settings"
                                onClick={() => navigate(`/user-profile/${username}/account`)}/>
                    </div>
                    {userData && userData.role === "ADMIN" && (
                        <Button text="Users list" onClick={() => navigate(`/admin/users`)}/>
                    )}

                </div>

                <div className="profile-inner-right-container">

                    <label className="profile-label">My game room</label>
                    <img src={gameRoomPhotoPreviewURL ? gameRoomPhotoPreviewURL : defaultGameRoomImage}
                         alt={"game room picture"}/>

                    <input
                        type="file"
                        accept="image/jpg, image/jpeg, image/png"
                        onChange={(event) => handleFileChange(event, 'gameRoom')}/>
                    <Button text="Upload game room picture" onClick={() => handleSubmit('gameRoom')}/>

                    <div className="buttons-container-profile-b">
                        <Button text="My systems" onClick={() => navigate(`/user-profile/${username}/my-systems`)}/>
                        <Button text="Add a system" onClick={() => navigate(`/user-profile/${username}/add-system`)}/>
                        <Button text="My games" onClick={() => navigate(`/user-profile/${username}/my-games`)}/>
                        <Button text="Add a game" onClick={() => navigate(`/user-profile/${username}/add-game`)}/>

                        <Button text="Random Game" onClick={async () => {
                            const randomGame = await getRandomGame(username)
                            if (!randomGame) {
                                navigate(`/user-profile/${username}/my-games`)
                            } else {
                                navigate(`/user-profile/${username}/game/${randomGame.gameID}`)
                            }
                        }}/>

                        <Button text="Random system" onClick={async () => {
                            const randomSystem = await getRandomSystem(username)
                            if (!randomSystem) {
                                navigate(`/user-profile/${username}/my-systems`)
                            } else {
                                navigate(`/user-profile/${username}/system/${randomSystem.gameSystemID}`)
                            }
                        }}/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile