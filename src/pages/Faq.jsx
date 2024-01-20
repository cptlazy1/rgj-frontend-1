import './Faq.css'

function Faq() {
    return (
        <>

            <div className="faq-container">
                <h1>FAQ</h1>
                <div className="faq-questions-container">
                    <div className="faq-question">
                        <h3>What is the Retro Game Jockey?</h3>
                        <p>The Retro Game Jockey is a platform designed for retro gaming enthusiasts.</p>
                    </div>
                    <div className="faq-question">
                        <h3>How do I sign up?</h3>
                        <p>Click on the sign up button in the navigation bar.</p>
                    </div>
                    <div className="faq-question">
                        <h3>How do I log in?</h3>
                        <p>Click on the log in button in the navigation bar.</p>
                    </div>
                    <div className="faq-question">
                        <h3>How do I contact you?</h3>
                        <p>Click on the contact button in the footer.</p>
                    </div>


                </div>
            </div>

        </>
    );
}

export default Faq;