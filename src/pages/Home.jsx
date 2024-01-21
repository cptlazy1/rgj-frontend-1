import './Home.css'
import gameroom from '../assets/game room.jpg'
import getTotalGames from "../helpers/getTotalGames.js"
import getTotalSystems from "../helpers/getTotalSystems.js"
import {useEffect, useState} from "react"

function Home() {

    const [gamesCount, setGamesCount] = useState(0)
    const [systemsCount, setSystemsCount] = useState(0)

    useEffect(() => {
            getTotalGames().then(count => setGamesCount(count))
        },
        [])

    useEffect(() => {
        getTotalSystems().then(count => setSystemsCount(count))
    }, [])


    return (
        <>
            <div className="body-container">

                <div className="inner-body-container">
                    <span className="welcome-text">
                        <h2 className="welcome">Hello Gamer!</h2>
                       Welcome to Retro Game Jockey, the ultimate destination for all retro gaming enthusiasts!
                        This is your personal hub for managing and showcasing your impressive retro game collection.
                        Here, you can discover hidden gems from the past, organize your collection in a way that suits
                        you, and keep track of your favorite games with ease. Revel in the nostalgia of the golden age
                        of gaming. Whether you are a seasoned collector or just starting your journey into the world of
                        retro gaming, Retro Game Jockey is here to enhance your experience. Start your nostalgic journey
                        today and dive into the rich history of gaming!
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