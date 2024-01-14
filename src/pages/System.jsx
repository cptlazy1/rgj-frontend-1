import './System.css'
import systemPicture from '../assets/Megadrive.jpg'
import ToggleSwitch from "../components/ToggleSwitch.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import getSystem from "../helpers/getSystem.js";
import getSystemImage from "../helpers/getSystemImage.js";

function System() {

    const navigate = useNavigate();

    const [system, setSystem] = useState({})
    const [systemImage, setSystemImage] = useState([])
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchSystem = async () => {
            const system = await getSystem()
            if (!system) {
                setError('No system data returned')
            } else {
                setSystem(system)
            }
        }

        void fetchSystem()
    }, [])

    useEffect(() => {
        const fetchSystemImage = async () => {
            const systemImage = await getSystemImage()
            if (!systemImage) {
                setError('No system image returned')
            } else {
                const systemImageUrl = URL.createObjectURL(systemImage)
                setSystemImage(systemImageUrl)
            }
        }

        void fetchSystemImage()
    }, [])


    if (error) {
        return <div>Error: {error}</div>
    }

    // This is a placeholder because the sliders are static
    const handleToggle = () => {
        console.log('toggle')
    }

    return (

        <>

            <div className="system-container">

                <h1>{system?.gameSystemDto?.gameSystemBrand + " " + system?.gameSystemDto?.gameSystemName || "Default System Name"}</h1>
                <div className="system-condition-and-image-container">

                    <div className="system-picture-container">

                        <img className="system-picture" src={systemImage || systemPicture} alt="system picture"/>

                        <label>Year of release: {system?.gameSystemDto?.gameSystemYearOfRelease || 'N/A'}</label>
                    </div>

                    <div className="system-condition-container">
                        <label>Box</label>
                        <ToggleSwitch isOn={system?.gameSystemConditionDto?.hasBox} handleToggle={handleToggle}/>
                        <label>Cables</label>
                        <ToggleSwitch isOn={system?.gameSystemConditionDto?.hasCables} handleToggle={handleToggle}/>
                        <label>Modified</label>
                        <ToggleSwitch isOn={system?.gameSystemConditionDto?.isModified} handleToggle={handleToggle}/>
                        <label>Ready to play</label>
                        <ToggleSwitch isOn={system?.gameSystemDto?.isReadyToPlay} handleToggle={handleToggle}/>
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