import { useState } from 'react'
import './AddSystem.css'
import Button from "../components/Button.jsx"
import ToggleSwitch from "../components/ToggleSwitch.jsx"
import systemPicture from "../assets/Megadrive.jpg"
import addSystem from "../helpers/addSystem.js"
import axios from "axios"

function AddSystem() {
    const [form, setForm] = useState({
        name: '',
        brand: '',
        year: '',
        isReadyToPlay: false,
        box: false,
        cables: false,
        modified: false,
        file: [],
        previewURL: '',
        message: ''
    })

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setForm({
            ...form,
            file: file,
            previewURL: URL.createObjectURL(file)
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const username = 'porgy123' // replace with actual username
        const system = form // use form state object as system
        try {
            const response = await addSystem(username, system)
            setForm({
                ...form,
                message: 'System added to collection'
            })
            const gameSystemID = response.id;
            console.log(gameSystemID)
            await uploadFile(username, gameSystemID, event);
        } catch (error) {
            setForm({
                ...form,
                message: 'Failed to add system to collection'
            })
        }
    }

    const uploadFile = async (username, gameSystemID) => {
        // event.preventDefault()
        const formData = new FormData()
        formData.append('file', form.file)
        try {
            const result = await axios.post(`http://localhost:8080/users/${username}/game-systems/${gameSystemID}/upload-game-system-photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            console.log(result.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form className="add-system-form" onSubmit={handleSubmit}>
                <div className="details-and-image-container">
                    <div className="details-container">
                        <label>System name</label>
                        <input type="text" placeholder="Enter system name" value={form.name}
                               onChange={handleInputChange}/>

                        <label>Brand</label>
                        <input type="text" placeholder="Enter system brand" value={form.brand}
                               onChange={handleInputChange}/>

                        <label>Year</label>
                        <input type="text" placeholder="Enter system year" value={form.year}
                               onChange={handleInputChange}/>

                        <label>Is ready to play</label>
                        <ToggleSwitch isOn={form.isReadyToPlay} handleToggle={(checked) => setForm({...form, isReadyToPlay: checked})}/>
                        <Button text="Add system to collection" onClick={handleSubmit}/>

                    </div>
                    <div className="add-system-picture-container">
                        <img className="system-picture" src={systemPicture} alt="system picture"/>

                        <label htmlFor="system-image">
                            Upload an image:
                            <input type="file" id="system-image" name="system-image" accept="image/*" onChange={handleFileChange}/>
                        </label>

                    </div>
                </div>
                <div className="conditions-container">
                    <div className="add-system-condition-container">
                        <label>Box</label>
                        <ToggleSwitch isOn={form.box} handleToggle={(checked) => setForm({...form, box: checked})}/>
                        <label>Cables</label>
                        <ToggleSwitch isOn={form.cables} handleToggle={(checked) => setForm({...form, cables: checked})}/>
                        <label>Modified</label>
                        <ToggleSwitch isOn={form.modified} handleToggle={(checked) => setForm({...form, modified: checked})}/>
                    </div>
                </div>

            </form>

            <div className="message">
                {form.message && <p>{form.message}</p>}
            </div>
        </>
    )

}

export default AddSystem