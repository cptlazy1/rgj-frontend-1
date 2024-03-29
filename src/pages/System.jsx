import './System.css'
import defaultSystemPicture from '../assets/default system image.png'
import ToggleSwitch from "../components/ToggleSwitch.jsx"
import Button from "../components/Button.jsx"
import {useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import getSystem from "../helpers/getSystem.js"
import getSystemImage from "../helpers/getSystemImage.js"
import deleteSystem from "../helpers/deleteSystem.js"
import truncateString from "../helpers/truncateString.js";

function System() {

    const navigate = useNavigate()

    const [system, setSystem] = useState({})
    const [systemImage, setSystemImage] = useState("")
    const [error, setError] = useState(null)
    const { username, systemID } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchSystem = async () => {
            setLoading(true)
            const system = await getSystem(username, systemID)
            if (!system) {
                setError('No system data returned')
            } else {
                setSystem(system)
            }
            setLoading(false)
        }

        void fetchSystem()
    }, [systemID, username])


    useEffect(() => {
        const fetchSystemImage = async () => {
            try {
                setLoading(true)
                const systemImage = await getSystemImage(username, systemID)
                if (!systemImage) {
                    setSystemImage(defaultSystemPicture)
                } else {
                    if (systemImage instanceof Blob) {
                        const systemImageUrl = URL.createObjectURL(systemImage)
                        setSystemImage(systemImageUrl)
                    } else {
                        console.error('systemImage is not a Blob')
                    }
                }
            } catch (error) {
                console.error('An error occurred while fetching the system image:')
            } finally {
                setLoading(false)
            }
        }

        void fetchSystemImage()
    }, [systemID, username])


    if (loading) {
        return <div className="loading">Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    // This is a placeholder because the sliders are static
    const handleToggle = () => {
        console.log('toggle')
    }

    const handleDelete = async () => {
        try {
            await deleteSystem(username, systemID)
            navigate(`/user-profile/${username}/my-systems`)
        }
        catch (error) {
            console.error("An error occurred while deleting the system" + error)
        }
    }

    return (

        <>

            <div className="system-container">

                <h1>{truncateString(system?.gameSystemDto?.gameSystemName || "Default System Name")}</h1>
                <div className="system-condition-and-image-container">
                    <div className="system-picture-container">
                        <img className="system-picture" src={systemImage || defaultSystemPicture} alt="system picture"/>
                        <label>{system?.gameSystemDto?.gameSystemBrand || 'N/A'} {system?.gameSystemDto?.gameSystemYearOfRelease || 'N/A'}</label>
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

                    <Button text="My systems" onClick={() => navigate(`/user-profile/${username}/my-systems`)}/>
                    <Button text="Add a system" onClick={() => navigate(`/user-profile/${username}/add-system`)}/>
                    <Button text="Delete system" onClick={handleDelete}/>
                    <Button text="Profile" onClick={() => navigate(`/user-profile/${username}`)}/>
                </div>
            </div>


        </>
    )
}

export default System