import './AddGame.css'
import Button from "../components/Button.jsx";
import ToggleSwitch from "../components/ToggleSwitch.jsx";
import gamePicture from "../assets/super-mario-bros-3-poster-nes-cover-61x91-5cm.jpg";

function AddGame() {
    return (
        <div>
            <form className="add-game-form">
                <div className="details-and-image-container">
                <div className="details-container">
                    <label>Title</label>
                    <input type="text" placeholder="Enter title"/>

                    <label>Publisher</label>
                    <input type="text" placeholder="Enter publisher"/>

                    <label>System</label>
                    <input type="text" placeholder="Enter system"/>

                    <label>Year</label>
                    <input type="text" placeholder="Enter year"/>

                    <label>Is Original</label>
                    <ToggleSwitch/>

                    <Button text="Add game to collection"
                            onClick={() => console.log("Sign up button clicked. Really!!")}/>

                </div>
                <div className="add-game-picture-container">
                    <img className="game-picture" src={gamePicture} alt="game picture"/>
                    <div className="edit-game-button">
                        <Button text="Edit" onClick={() => console.log("Edit button clicked. Really!!")}/>
                    </div>
                </div>
                </div>
                <div className="conditions-container">
                <div className="add-game-condition-container">
                    <label>Complete</label>
                    <ToggleSwitch/>
                    <label>Box</label>
                    <ToggleSwitch/>
                    <label>Manual</label>
                    <ToggleSwitch/>
                </div>

                <div className="add-game-condition-container">
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

            </form>

        </div>
    )
}

export default AddGame