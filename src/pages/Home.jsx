import './Home.css'
import gameroom from '../assets/game room.jpg'
import getTotalGames from "../helpers/getTotalGames.js"
import getTotalsystems from "../helpers/getTotalSystems.js"
import {useEffect, useState} from "react"

function Home() {

    const [gamesCount, setGamesCount] = useState(0)
    const [systemsCount, setSystemsCount] = useState(0)

    useEffect(() => {
            getTotalGames().then(count => setGamesCount(count));
        },
        [])

    useEffect(() => {
        getTotalsystems().then(count => setSystemsCount(count));
    }, []);


    return (
        <>
            <div className="body-container">

                <div className="inner-body-container">
                    <span className="welcome-text">
                        <h2 className="welcome">Welcome to the RGJ</h2>
                        Lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                        consequat ultricies, nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor
                        nisl eget nisl aliquam, eget aliquam nisl ultricies. Donec euismod, nisl eget consequat
                        ultricies, nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor nisl eget
                        nisl aliquam, eget aliquam nisl ultricies. Donec euismod, nisl eget consequat ultricies,
                        nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor nisl eget nisl.
                    </span>


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
            <figure className="game-room">
                <img src={gameroom} alt="game room"/>
            </figure>
        </>
    )
}

export default Home