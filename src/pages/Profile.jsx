import './Profile.css'
import gamerProfilePicture from '../assets/Gamer profile picture.png'
import gameRoom2 from '../assets/Game room 2.png'
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";

function Profile() {

    const navigate = useNavigate()

    return (
        <div className="profile-container">

            <div className="profile-inner-left-container">
                <div>
                    <label className="profile-label">Username</label>
                    {/*TODO: Get the picture from the backend*/}
                    <img src={gamerProfilePicture} alt="gamer profile picture"/>
                </div>

                <section className="counters-container-profile">
                    <div className="total-games">
                        <label className="counter-label">Total games</label>
                        <p className="counter">
                            1234567890
                        </p>
                    </div>

                    <div className="total-systems">
                        <label className="counter-label">Total systems</label>
                        <p className="counter">
                            1234567890
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
                {/*TODO: Get the image from the backend*/}
                <img src={gameRoom2} alt="game room picture"/>

                <div className="buttons-container-profile-b">
                    <Button text="My systems" onClick={() => navigate("/user-profile/my-systems")}/>
                    <Button text="Add a system" onClick={() => navigate("/user-profile/add-system")}/>
                    <Button text="My games" onClick={() => navigate("/user-profile/my-games")}/>
                    <Button text="Add a game" onClick={() => navigate("/user-profile/add-game")}/>
                    <Button text="Random game" onClick={() => navigate("/user-profile/game")}/>
                    <Button text="Random system" onClick={() => navigate("/user-profile/system")}/>
                </div>

            </div>
        </div>
    )
}

export default Profile