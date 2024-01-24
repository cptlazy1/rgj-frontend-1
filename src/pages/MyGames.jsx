import './MyGames.css'
import {useState, useEffect} from "react"
import truncateString from "../helpers/truncateString"
import getUsersGames from "../helpers/getUsersGames.js"
import {useNavigate, useParams} from "react-router-dom"
import Button from "../components/Button.jsx";


function MyGames() {

    const [games, setGames] = useState([])
    const [error, setError] = useState(null)
    const {username} = useParams()
    const [page, setPage] = useState(0)
    const [rowsPerPage] = useState(15)
    const navigate = useNavigate()


    useEffect(() => {
        const fetchGames = async () => {
            try {
                const games = await getUsersGames(username)
                setGames(games)
            } catch (error) {
                setError('An error occurred while fetching the games: ' + error.message)
            }
        }

        void fetchGames()
    }, [username])

    const handleChangePage = (newPage) => {
        if (newPage < 0 || newPage * rowsPerPage >= games.length) {
            return;
        }
        setPage(newPage);
    }

    if (error) {
        return <div>Error: {error}</div>
    }


    return (
        <div className="my-games">
            <h1>My Games</h1>
            <div className="my-games-buttons">
                <Button text="Add game" onClick={() => navigate(`/user-profile/${username}/add-game`)}/>
                <Button text="Profile" onClick={() => navigate(`/user-profile/${username}`)}/>
            </div>
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


                {games.length > 0 ? (
                    games.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((game, index) => (
                        <tr key={index}>
                            <td>
                            <span className="game-name"
                                  onClick={() => navigate(`/user-profile/${username}/game/${game.gameID}`)}>
                                {truncateString(game.gameName)}
                            </span>
                            </td>
                            <td>{truncateString(game.gamePublisher)}</td>
                            <td>{truncateString(game.systemName)}</td>
                            <td>{truncateString(game.gameYearOfRelease)}</td>
                            <td>{truncateString(game.gameIsOriginal ? 'Yes' : 'No')}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No games in collection</td>
                    </tr>
                )}
                </tbody>
            </table>

            <div className="my-games-buttons">
                <Button text="previous" onClick={() => handleChangePage(page - 1)} disabled={page === 0}/>
                <label className="my-games-page-number">Page {page + 1}</label>
                <Button text="next" onClick={() => handleChangePage(page + 1)}
                        disabled={(page + 1) * rowsPerPage >= games.length}/>
            </div>

        </div>
    )

}

export default MyGames