import './Profile.css'
import gamerProfilePicture from '../assets/Gamer profile picture.png'
import gameRoom2 from '../assets/Game room 2.png'
import {useEffect, useState} from "react"
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import Button from "../components/Button.jsx"
import getUsersGames from "../helpers/getUsersGames.js"
import getUsersSystems from "../helpers/getUsersSystems.js"

function Profile() {
    const [userData, setUserData] = useState(null)
    const [games, setGames] = useState([])
    const [systems, setSystems] = useState([])
    const [profilePhoto, setProfilePhoto] = useState(null)
    const [gameRoomPhoto, setGameRoomPhoto] = useState(null)
    const { username } = useParams()
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


    return (
        <div className="profile-container">
            <div className="profile-inner-left-container">
                <div>
                    <label className="profile-label">{userData.username}</label>

                    <img src={profilePhoto ? `data:image/png;base64,${profilePhoto}` : gamerProfilePicture}
                         alt="gamer profile picture"/>

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
                <img src={gameRoomPhoto ? `data:image/png;base64,${gameRoomPhoto}` : gameRoom2 } alt="game room picture"/>

                <div className="buttons-container-profile-b">
                    <Button text="My systems" onClick={() => navigate(`/user-profile/${username}/my-systems`)}/>
                    <Button text="Add a system" onClick={() => navigate(`/user-profile/${username}/add-system`)}/>
                    <Button text="My games" onClick={() => navigate(`/user-profile/${username}/my-games`)}/>
                    <Button text="Add a game" onClick={() => navigate(`/user-profile/${username}/add-game`)}/>

                    {/*Todo: fix the rest of these buttons with username*/}
                    <Button text="Random game" onClick={() => navigate("/user-profile/game")}/>
                    <Button text="Random system" onClick={() => navigate("/user-profile/system")}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;