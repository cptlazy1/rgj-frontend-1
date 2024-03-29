import './Game.css'
import defaultGamePicture from '../assets/default game image.png'
import ToggleSwitch from "../components/ToggleSwitch.jsx"
import Button from "../components/Button.jsx"
import {useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import getGame from "../helpers/getGame.js"
import getGameImage from "../helpers/getGameImage.js"
import deleteGame from "../helpers/deleteGame.js"
import truncateString from "../helpers/truncateString.js";

function Game() {

    const navigate = useNavigate()

    const [game, setGame] = useState({})
    const [gameImage, setGameImage] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const {username, gameID} = useParams()

    useEffect(() => {
        const fetchGame = async () => {
            setLoading(true)
            const game = await getGame(username, gameID)
            if (!game) {
                setError('No game data returned')
            } else {
                setGame(game)
            }
            setLoading(false)
        }

        void fetchGame()
    }, [gameID, username])


    useEffect(() => {
        const fetchGameImage = async () => {
            try {
                setLoading(true)
                const gameImage = await getGameImage(username, gameID)
                if (!gameImage) {
                    setGameImage(defaultGamePicture)
                } else {
                    if (gameImage instanceof Blob) {
                        const gameImageUrl = URL.createObjectURL(gameImage)
                        setGameImage(gameImageUrl)
                    } else {
                        console.error('gameImage is not a Blob')
                    }
                }
            } catch (error) {
                console.error('An error occurred while fetching the game photo:')
            } finally {
                setLoading(false)
            }
        }

        void fetchGameImage()
    }, [gameID, username])


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
            await deleteGame(username, gameID)
            navigate(`/user-profile/${username}/my-games/`)
        } catch (error) {
            console.error("An error occurred while deleting the game" + error)
        }
    }

    return (
        <>

            <div className="game-container">

                <h1>{truncateString(game?.gameDto?.gameName || "Default game name")}</h1>
                <div className="game-condition-and-image-container">
                    <div className="game-picture-container">
                        <img className="game-picture" src={gameImage || defaultGamePicture} alt="game picture"/>
                        <label>{game?.gameDto?.gamePublisher || 'N/A'} {game?.gameDto?.systemName || 'N/A'} {game?.gameDto?.gameYearOfRelease || "N/A"}</label>
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

                    <Button text="My games" onClick={() => navigate(`/user-profile/${username}/my-games`)}/>
                    <Button text="Add a game" onClick={() => navigate(`/user-profile/${username}/add-game`)}/>
                    <Button text="Delete game" onClick={handleDelete}/>
                    <Button text="Profile" onClick={() => navigate(`/user-profile/${username}`)}/>


                </div>
            </div>

        </>
    )
}

export default Game