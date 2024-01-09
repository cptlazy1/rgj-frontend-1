import './Home.css'
import gameroom from '../assets/game room.jpg'
import getGamesCount from "../helpers/getTotalGames.js"
import getSystemsCount from "../helpers/getTotalSystems.js"
import {useEffect, useState} from "react"

function Home() {

    const [gamesCount, setGamesCount] = useState(0)
    const [systemsCount, setSystemsCount] = useState(0)

    useEffect(() => {
            getGamesCount().then(count => setGamesCount(count));
        },
        [])

    useEffect(() => {
        getSystemsCount().then(count => setSystemsCount(count));
    }, []);


    return (
        <>
            <div className="body-container">

                <div className="inner-body-container">
                    <p className="welcome-text">
                        <h2>Welcome to the RGJ</h2>
                        Lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                        consequat ultricies, nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor
                        nisl eget nisl aliquam, eget aliquam nisl ultricies. Donec euismod, nisl eget consequat
                        ultricies, nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor nisl eget
                        nisl aliquam, eget aliquam nisl ultricies. Donec euismod, nisl eget consequat ultricies,
                        nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor nisl eget nisl.
                    </p>


                    <section className="counters-container-home">

                        <div className="total-games">
                            <label className="counter-label">Total games</label>
                            <p className="counter">
                                {gamesCount.toString().padStart(10, '0')}
                            </p>
                        </div>

                        <div className="total-systems">
                            <label className="counter-label">Total systems</label>
                            <p className="counter">
                                {systemsCount.toString().padStart(10, '0')}
                            </p>
                        </div>

                    </section>
                </div>
            </div>
            <div className="game-room">
                <img src={gameroom} alt="game room"/>
            </div>
        </>
    )
}

export default Home