import './Profile.css'
import gamerProfilePicture from '../assets/Gamer profile picture.png'
import gameRoom2 from '../assets/Game room 2.png'
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";

function Profile() {

    const navigate = useNavigate();

    return (
        <div className="profile-container">

            <div className="profile-inner-left-container">
                <div>
                    <label className="profile-label">Username</label>
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
                    <Button text="My Collection" onClick={() => console.log("Got to my collection. Really!!")}/>
                    <Button text="Account Settings"
                            onClick={() => console.log("Got to account settings. Really!!")}/>
                </div>

            </div>

            <div className="profile-inner-right-container">
                <label className="profile-label">My game room</label>
                <img src={gameRoom2} alt="game room picture"/>

                <div className="buttons-container-profile-b">
                    <Button text="My systems" onClick={() => navigate("/user-profile/systems")}/>
                    <Button text="Add a system" onClick={() => console.log("Add a system button clicked. Really!!")}/>
                    <Button text="My games" onClick={() => navigate("/user-profile/games")}/>
                    <Button text="Add a game" onClick={() => console.log("Add a game button clicked. Really!!")}/>
                    <Button text="Random game" onClick={() => console.log("Random game button clicked. Really!!")}/>
                    <Button text="Random system" onClick={() => console.log("Random system button clicked. Really!!")}/>
                </div>

            </div>
        </div>
    )
}

export default Profile