import './System.css'
import systemPicture from '../assets/Megadrive.jpg'
import ToggleSwitch from "../components/ToggleSwitch.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";

function System() {

    const navigate = useNavigate();

    return (

        <>

            <div className="system-container">
                {/*Todo: replace with actual system name*/}
                <h1>Sega MegaDrive</h1>
                <div className="system-condition-and-image-container">

                    <div className="system-picture-container">
                        {/*Todo: replace with actual system picture or default picture*/}
                        <img className="system-picture" src={systemPicture} alt="system picture"/>
                    </div>

                    <div className="system-condition-container">
                        {/*Todo: replace with actual system conditions*/}
                        <label>Box</label>
                        <ToggleSwitch/>
                        <label>Cables</label>
                        <ToggleSwitch/>
                        <label>Modified</label>
                        <ToggleSwitch/>
                        <label>Ready to play</label>
                        <ToggleSwitch/>
                    </div>

                </div>

                <div className="system-buttons-container">

                    <Button text="My systems" onClick={() => console.log("My systems button clicked. Really!!")}/>
                    <Button text="Add a system" onClick={() => navigate("/user-profile/add-system")}/>
                    <Button text="Delete system" onClick={() => console.log("Delete button clicked. Really!!")}/>
                    <Button text="Random system" onClick={() => console.log("Random system button clicked. Really!!")}/>

                </div>
            </div>


        </>
    )
}

export default System