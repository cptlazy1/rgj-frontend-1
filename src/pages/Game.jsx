import './Game.css'
import gamePicture from '../assets/super-mario-bros-3-poster-nes-cover-61x91-5cm.jpg'
import ToggleSwitch from "../components/ToggleSwitch.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import getGame from "../helpers/getGame.js";
import getGameImage from "../helpers/getGameImage.js"
function Game() {

    const navigate = useNavigate();

    const [game, setGame] = useState({})
    const [gameImage, setGameImage] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchGame = async () => {
            const game = await getGame()
            if (!game) {
                setError('No game data returned')
            } else {
                setGame(game)
            }
        }

        void fetchGame()
    }, [])

    useEffect(() => {
        const fetchGameImage = async () => {
            const gameImage = await getGameImage()
            if (!gameImage) {
                setError('No game image returned')
            } else {
                const gameImageUrl = URL.createObjectURL(gameImage)
                setGameImage(gameImageUrl)
            }
        }

        void fetchGameImage()
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

            <div className="game-container">

                <h1>{game?.gameDto?.gameName || 'Default Game Name'}</h1>
                <div className="game-condition-and-image-container">
                    <div className="game-picture-container">
                        <img className="game-picture" src={gameImage || gamePicture} alt="game picture"/>
                        <label>Year of release {game?.gameDto?.gameYearOfRelease || "N/A"}</label>
                    </div>
                    <div className="game-condition-container">
                        <label>Box</label>
                        <ToggleSwitch isOn={game?.gameConditionDto?.hasCase} handleToggle={handleToggle}/>
                        <label>Manual</label>
                        <ToggleSwitch isOn={game?.gameConditionDto?.hasManual} handleToggle={handleToggle}/>
                        <label>Scratches</label>
                        <ToggleSwitch isOn={game?.gameConditionDto?.hasScratches} handleToggle={handleToggle}/>
                        <label>Stickers</label>
                        <ToggleSwitch isOn={game?.gameConditionDto?.hasStickers} handleToggle={handleToggle}/>
                        <label>Writing</label>
                        <ToggleSwitch isOn={game?.gameConditionDto?.hasWriting} handleToggle={handleToggle}/>
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