import './Game.css'
import gamePicture from '../assets/super-mario-bros-3-poster-nes-cover-61x91-5cm.jpg'
import ToggleSwitch from "../components/ToggleSwitch.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";

function Game() {

    const navigate = useNavigate();

    return (
        <>

            <div className="game-container">
                <h1>Super Mario Bros. 3</h1>
                <div className="game-condition-and-image-container">
                    <div className="game-picture-container">
                        <img className="game-picture" src={gamePicture} alt="game picture"/>
                        <div className="edit-game-button">
                            <Button text="Edit" onClick={() => console.log("Edit button clicked. Really!!")}/>
                        </div>
                    </div>
                    <div className="game-condition-container">
                        <label>Complete</label>
                        <ToggleSwitch/>
                        <label>Box</label>
                        <ToggleSwitch/>
                        <label>Manual</label>
                        <ToggleSwitch/>
                    </div>

                    <div className="game-condition-container">
                        <label>Mint</label>
                        <ToggleSwitch/>
                        <label>Scratches</label>
                        <ToggleSwitch/>
                        <label>Stickers</label>
                        <ToggleSwitch/>
                        <label>Writing</label>
                        <ToggleSwitch/>
                    </div>


                </div>
                <div className="game-buttons-container">

                    <Button text="My games" onClick={() => console.log("Save button clicked. Really!!")}/>
                    <Button text="Add a game" onClick={() => navigate('/user-profile/add-game')}/>
                    <Button text="Delete game" onClick={() => console.log("Back button clicked. Really!!")}/>
                    <Button text="Random game" onClick={() => console.log("Random game button clicked. Really!!")}/>

                </div>
            </div>


        </>
    )
}

export default Game