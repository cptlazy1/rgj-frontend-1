import './MyGames.css'
import React, {useState, useEffect} from "react"
import truncateString from "../helpers/truncateString"
import getUsersGames from "../helpers/getUsersGames.js"
import {useNavigate} from "react-router-dom";

function MyGames() {

    const [games, setGames] = useState([])
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchGames = async () => {
            const games = await getUsersGames()
            if (!games.length) {
                setError('No games data returned')
            } else {
                setGames(games)
            }
        }

        void fetchGames()
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="my-games">
            <h1>My Games</h1>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Publisher</th>
                    <th>System</th>
                    <th>Year</th>
                    <th>Is original</th>
                </tr>
                </thead>
                <tbody>
                {games.map((game, index) => (
                    <tr key={index}>
                        <td>
            <span className="game-name" onClick={() => navigate('/user-profile/game')}>
                {truncateString(game.gameName)}
            </span>
                        </td>
                        <td>{truncateString(game.gamePublisher)}</td>
                        <td>{truncateString(game.systemName)}</td>
                        <td>{truncateString(game.gameYearOfRelease)}</td>
                        <td>{truncateString(game.gameIsOriginal ? 'Yes' : 'No')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>)

}

export default MyGames