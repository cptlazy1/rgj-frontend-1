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
                <h1>Sega MegaDrive</h1>
                <div className="system-condition-and-image-container">

                    <div className="system-picture-container">
                        <img className="system-picture" src={systemPicture} alt="system picture"/>
                        <div className ="edit-system-button" >
                            <Button text="Edit" onClick={() => console.log("Edit button clicked. Really!!")}/>
                        </div>
                    </div>

                    <div className="system-condition-container">
                        <label>Box</label>
                        <ToggleSwitch/>
                        <label>Cables</label>
                        <ToggleSwitch/>
                        <label>Modified</label>
                        <ToggleSwitch/>
                    </div>

                </div>

                <div className="system-buttons-container">

                    <Button text="My systems" onClick={() => console.log("My systems button clicked. Really!!")}/>
                    <Button text="Add a stytem" onClick={() => navigate("/user-profile/add-system")}/>
                    <Button text="Delete system" onClick={() => console.log("Delete button clicked. Really!!")}/>
                    <Button text="Random system" onClick={() => console.log("Random system button clicked. Really!!")}/>

                </div>
            </div>


        </>
    )
}

export default System