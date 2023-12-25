import './Home.css'
import gameroom from '../assets/game room.jpg'


function Home() {
    return (
        <>
            <div className="body-container">
                <p className="welcome-text">
                    <h2>Welcome to the RGJ</h2>
                    Lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                    consequat ultricies, nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor
                    nisl eget nisl aliquam, eget aliquam nisl ultricies. Donec euismod, nisl eget consequat
                    ultricies, nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor nisl eget
                    nisl aliquam, eget aliquam nisl ultricies. Donec euismod, nisl eget consequat ultricies,
                    nunc nisl placerat quam, a ultrices quam nisi eget nisl. Donec auctor nisl eget nisl.
                </p>
                <section className="counters-container">
                    <div className="total-games">
                        <p className="counter">
                            0123456789
                        </p>
                    </div>
                    <div className="total-systems">
                        <p className="counter">
                            0123456789
                        </p>
                    </div>
                </section>

            </div>
            <div className="game-room">
                <img src={gameroom} alt="game room"/>
            </div>
        </>
    )
}

export default Home