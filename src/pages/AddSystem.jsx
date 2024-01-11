import {useState} from 'react'
import './AddSystem.css'
import Button from "../components/Button.jsx"
import ToggleSwitch from "../components/ToggleSwitch.jsx"
import systemPicture from "../assets/Megadrive.jpg"
import addSystem from "../helpers/addSystem.js"


function AddSystem() {
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [year, setYear] = useState('')
    const [isReadyToPlay, setIsReadyToPlay] = useState(false)
    const [box, setBox] = useState(false)
    const [cables, setCables] = useState(false)
    const [modified, setModified] = useState(false)

    const [message, setMessage] = useState('')

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
        const username = 'porgy123' // Todo: replace with actual user id

        try {
            await addSystem(username, system)
            setMessage('System added to collection')
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
                        <img className="system-picture" src={systemPicture} alt="system picture"/>
                        <div className="edit-system-button">
                            <Button text="Edit" onClick={() => console.log("Edit button clicked. Really!!")}/>
                        </div>
                    </div>
                </div>
                <div className="conditions-container">
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