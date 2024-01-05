import './Faq.css'

function Faq() {
    return (
        <>
            <h1>FAQ</h1>
            <div className="faq-container">

                <div className="faq-questions-container">
                    <div className="faq-question">
                        <h3>What is the RGJ?</h3>
                        <p>The RGJ is a non-profit organization that helps people with their mental health.</p>
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
                        <p>Click on the contact button in the navigation bar.</p>
                    </div>


                </div>
            </div>

        </>
    );
}

export default Faq;