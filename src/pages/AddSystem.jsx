import {useState} from 'react'
import './AddSystem.css'
import Button from "../components/Button.jsx"
import ToggleSwitch from "../components/ToggleSwitch.jsx"
import systemPicture from "../assets/Megadrive.jpg"
import addSystem from "../helpers/addSystem.js"
import axios from "axios";
import {useParams} from "react-router-dom";


function AddSystem() {
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [year, setYear] = useState('')
    const [isReadyToPlay, setIsReadyToPlay] = useState(false)
    const [box, setBox] = useState(false)
    const [cables, setCables] = useState(false)
    const [modified, setModified] = useState(false)
    const [message, setMessage] = useState('')
    const [file, setFile] = useState([])
    const [previewURL, setPreviewURL] = useState('')

    const {username} = useParams()

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        console.log(file)
        setFile(file)
        setPreviewURL(URL.createObjectURL(file))
    }

    async function uploadFile(username, gameSystemID) {
        const formData = new FormData()
        formData.append('file', file)

        try {
            const result = await axios.post(`http://localhost:8080/users/${username}/game-systems/${gameSystemID}/upload-game-system-photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })
            console.log(result.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const system = {
            gameSystemDto: {
                gameSystemName: name,
                gameSystemBrand: brand,
                gameSystemYearOfRelease: parseInt(year, 10),
                isReadyToPlay: isReadyToPlay
            },
            gameSystemConditionDto: {
                hasBox: box,
                hasCables: cables,
                isModified: modified
            }
        }


        try {
            const gameSystemID = await addSystem(username, system)
            setMessage(system.gameSystemDto.gameSystemName + ' added to collection')
            await uploadFile(username, gameSystemID);
        } catch (error) {
            console.error(error)
            setMessage('Failed to add system to collection')
        }


    }

    return (
        <>
            <form className="add-system-form" onSubmit={handleSubmit}>
                <div className="details-and-image-container">
                    <div className="details-container">
                        <label>System name</label>
                        <input type="text" placeholder="Enter system name" value={name}
                               onChange={(e) => setName(e.target.value)}/>

                        <label>Brand</label>
                        <input type="text" placeholder="Enter system brand" value={brand}
                               onChange={(e) => setBrand(e.target.value)}/>

                        <label>Year</label>
                        <input type="text" placeholder="Enter system year" value={year}
                               onChange={(e) => setYear(e.target.value)}/>

                        <label>Is ready to play</label>
                        <ToggleSwitch isOn={isReadyToPlay} handleToggle={(checked) => setIsReadyToPlay(checked)}/>
                        <Button text="Add system to collection" onClick={handleSubmit}/>

                    </div>
                    <div className="add-system-picture-container">
                        <img className="system-picture" src={previewURL || systemPicture} alt="system picture"/>

                        <label htmlFor="system-image">
                            Upload system image:
                            <input type="file" id="system-image" name="system-image" accept="image/*"
                                   onChange={handleFileChange}/>
                        </label>

                    </div>
                </div>
                <div className="conditions-container-system">
                    <div className="add-system-condition-container">
                        <label>Box</label>
                        <ToggleSwitch isOn={box} handleToggle={(checked) => setBox(checked)}/>
                        <label>Cables</label>
                        <ToggleSwitch isOn={cables} handleToggle={(checked) => setCables(checked)}/>
                        <label>Modified</label>
                        <ToggleSwitch isOn={modified} handleToggle={(checked) => setModified(checked)}/>
                    </div>
                </div>

            </form>

            <div className="message">
                {message && <p>{message}</p>}
            </div>
        </>
    )

}

export default AddSystem