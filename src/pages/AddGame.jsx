import {useState} from 'react'
import './AddGame.css'
import Button from "../components/Button.jsx"
import ToggleSwitch from "../components/ToggleSwitch.jsx"
import defaultGamePicture from "../assets/default game image.png"
import addGame from "../helpers/addGame.js"
import {useNavigate, useParams} from "react-router-dom"
import { instance } from "../helpers/axiosInstance.js"




function AddGame() {
    const [title, setTitle] = useState('')
    const [publisher, setPublisher] = useState('')
    const [system, setSystem] = useState('')
    const [year, setYear] = useState('')
    const [isOriginal, setIsOriginal] = useState(false)
    const [box, setBox] = useState(false)
    const [manual, setManual] = useState(false)
    const [scratches, setScratches] = useState(false)
    const [stickers, setStickers] = useState(false)
    const [writing, setWriting] = useState(false)
    const [message, setMessage] = useState('')
    const [gamePictureFile, setGamePictureFile] = useState([])
    const [previewURL, setPreviewURL] = useState('')
    const {username} = useParams()
    const navigate = useNavigate()

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setGamePictureFile(file)
        setPreviewURL(URL.createObjectURL(file))
    }

    async function uploadFile(username, gameID) {
        const formData = new FormData()
        formData.append('file', gamePictureFile)

        try {
            await instance.post(`/users/${username}/games/${gameID}/upload-game-photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })

        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (title.length < 1 || title.length > 30) {
            setMessage('Game title must be between 1 and 30 characters')
            return
        }

        if (publisher.length < 1 || publisher.length > 30) {
            setMessage('Game publisher must be between 1 and 30 characters')
            return
        }

        if (system.length < 1 || system.length > 30) {
            setMessage('Game system must be between 1 and 30 characters')
            return
        }

        const yearRegex = /^\d{4}$/
        if (!yearRegex.test(year)) {
            setMessage('Year must be a 4 digit number')
            return
        }

        if (gamePictureFile.length === 0) {
            setMessage('Please upload a game image')
            return
        }

        const game = {
            gameDto: {
                gameName: title,
                gameYearOfRelease: parseInt(year, 10),
                gamePublisher: publisher,
                gameIsOriginal: isOriginal,
                systemName: system

            },
            gameConditionDto: {
                hasManual: manual,
                hasCase: box,
                hasScratches: scratches,
                hasStickers: stickers,
                hasWriting: writing
            }
        }


        try {
            const gameID = await addGame(username, game)
            setMessage(game.gameDto.gameName + " added to collection")
            await uploadFile(username, gameID)
        } catch (error) {
            console.error(error)
            setMessage("Failed to add game to collection")
        }

    }

    return (
        <>

            <form className="add-game-form" onSubmit={handleSubmit}>
                <div className="details-and-image-container">
                    <div className="details-container">
                        <label>Title</label>
                        <input type="text" placeholder="Enter title"
                               onChange={(event) => setTitle(event.target.value)}/>

                        <label>Publisher</label>
                        <input type="text" placeholder="Enter publisher"
                               onChange={(event) => setPublisher(event.target.value)}/>

                        <label>System</label>
                        <input type="text" placeholder="Enter system"
                               onChange={(event) => setSystem(event.target.value)}/>

                        <label>Year</label>
                        <input type="text" placeholder="Enter year"
                               onChange={(event) => setYear(event.target.value)}/>

                        <label>Is Original</label>
                        <ToggleSwitch isOn={isOriginal} handleToggle={(checked) => setIsOriginal(checked)}/>
                        <Button text="Add game to collection" onClick={handleSubmit}/>
                        <Button text="Profile" onClick={() => navigate(`/user-profile/${username}`)}/>

                    </div>

                    <div className="add-game-picture-container">
                        <img className="game-picture" src={previewURL || defaultGamePicture} alt="game picture"/>

                        <label htmlFor="game-image">
                            Upload game image
                            <input type="file" id="game-image" name="game-image" accept="image/jpg, image/jpeg, image/png"
                                   onChange={handleFileChange}/>
                        </label>


                    </div>
                </div>

                <div className="conditions-container-game">
                    <div className="add-game-condition-container">
                        <label>Box</label>
                        <ToggleSwitch isOn={box} handleToggle={(checked) => setBox(checked)}/>
                        <label>Manual</label>
                        <ToggleSwitch isOn={manual} handleToggle={(checked) => setManual(checked)}/>
                        <label>Scratches</label>
                        <ToggleSwitch isOn={scratches} handleToggle={(checked) => setScratches(checked)}/>
                        <label>Stickers</label>
                        <ToggleSwitch isOn={stickers} handleToggle={(checked) => setStickers(checked)}/>
                        <label>Writing</label>
                        <ToggleSwitch isOn={writing} handleToggle={(checked) => setWriting(checked)}/>
                    </div>
                </div>

            </form>

            <div className="message">
                {message && <p>{message}</p>}
            </div>

        </>
    )
}

export default AddGame