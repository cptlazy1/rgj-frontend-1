import './AddSystem.css'
import Button from "../components/Button.jsx";
import ToggleSwitch from "../components/ToggleSwitch.jsx";
import systemPicture from "../assets/Megadrive.jpg";

function AddSystem() {



    return (
        <div>
            <form className="add-system-form">
                <div className="details-and-image-container">
                    <div className="details-container">
                        <label>System name</label>
                        <input type="text" placeholder="Enter system name"/>

                        <label>Brand</label>
                        <input type="text" placeholder="Enter system brand"/>

                        <label>Year</label>
                        <input type="text" placeholder="Enter system year"/>


                        <label>Is ready to play</label>
                        <ToggleSwitch/>

                        <Button text="Add system to collection"
                                onClick={() => console.log("Sign up button clicked. Really!!")}/>

                    </div>
                    <div className="add-system-picture-container">
                        <img className="system-picture" src={systemPicture} alt="system picture"/>
                        <div className="edit-system-button">
                            <Button text="Edit" onClick={() => console.log("Edit button clicked. Really!!")}/>
                        </div>
                    </div>
                </div>
                <div className="conditions-container">
                    <div className="add-system-condition-container">
                        <label>Box</label>
                        <ToggleSwitch/>
                        <label>Cables</label>
                        <ToggleSwitch/>
                        <label>Modified</label>
                        <ToggleSwitch/>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default AddSystem