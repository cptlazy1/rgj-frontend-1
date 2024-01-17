import './Profile.css'
import gamerProfilePicture from '../assets/Gamer profile picture.png'
import gameRoom2 from '../assets/Game room 2.png'
import {useEffect, useState} from "react"
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import Button from "../components/Button.jsx"
import getUsersGames from "../helpers/getUsersGames.js"
import getUsersSystems from "../helpers/getUsersSystems.js"
import getRandomGame from "../helpers/getRandomGame.js"
import getRandomSystem from "../helpers/getRandomSystem.js"

function Profile() {
    const [userData, setUserData] = useState(null)
    const [games, setGames] = useState([])
    const [systems, setSystems] = useState([])
    const [profilePhoto, setProfilePhoto] = useState(null)
    const [gameRoomPhoto, setGameRoomPhoto] = useState(null)
    const [previewURL, setPreviewURL] = useState('')
    const {username} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/users/${username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }

                });
                setUserData(response.data);

                setProfilePhoto(response.data.profilePhotoData)
                setGameRoomPhoto(response.data.gameRoomPhotoData)


                const games = await getUsersGames(response.data.username)
                const systems = await getUsersSystems(response.data.username)

                setGames(games)
                setSystems(systems)

            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        void fetchUserData();
    }, [username]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    // Write a function that will handle the file change
    const handleFileChange = async (event) => {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append("file", file)
        setProfilePhoto(formData)
        setPreviewURL(URL.createObjectURL(file))
    }


    // Write a function that will upload the file to the server
    const uploadFile = async (username) => {

        try {
            const response = await axios.post(`http://localhost:8080/users/${username}/upload-pp`, profilePhoto, {
                headers: {
                    // "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            setProfilePhoto(response.data.profilePhotoData)

        } catch (error) {
            console.error("Error uploading profile photo", error)
        }
    }

    // Write a function that will handle to submit
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await uploadFile(username)
        } catch (error) {
            console.error("Error uploading profile photo", error)
        }
    }


    return (
        <div className="profile-container">
            <div className="profile-inner-left-container">
                <div className="profile-picture">
                    <label className="profile-label">{userData.username}</label>

                    {/*<img src={profilePhoto ? `data:image/png;base64,${profilePhoto}` : gamerProfilePicture}*/}
                    <img src={previewURL ? `data:image/png;base64,${previewURL}` : gamerProfilePicture}
                         alt="gamer profile picture"/>
                    <input type="file" onChange={handleFileChange}/>
                    <Button text="Change profile picture" onClick={handleSubmit}/>

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
                            onClick={() => navigate("/user-profile/account")}/>
                </div>
            </div>

            <div className="profile-inner-right-container">
                <label className="profile-label">My game room</label>
                <img src={gameRoomPhoto ? `data:image/png;base64,${gameRoomPhoto}` : gameRoom2}
                     alt="game room picture"/>

                <input type="file" onChange={handleFileChange}/>
                <Button text="Change game room picture" onClick={handleSubmit}/>
                <div className="buttons-container-profile-b">
                    <Button text="My systems" onClick={() => navigate(`/user-profile/${username}/my-systems`)}/>
                    <Button text="Add a system" onClick={() => navigate(`/user-profile/${username}/add-system`)}/>
                    <Button text="My games" onClick={() => navigate(`/user-profile/${username}/my-games`)}/>
                    <Button text="Add a game" onClick={() => navigate(`/user-profile/${username}/add-game`)}/>

                    {/*Todo: fix the rest of these buttons with username*/}

                    <Button text="Random Game" onClick={async () => {
                        const randomGame = await getRandomGame(username)
                        navigate(`/user-profile/${username}/game/${randomGame.gameID}`)
                    }}/>

                    <Button text="Random system" onClick={async () => {
                        const randomSystem = await getRandomSystem(username)
                        navigate(`/user-profile/${username}/system/${randomSystem.gameSystemID}`)
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;