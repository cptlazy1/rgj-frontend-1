import './Footer.css'
import NavigationBar from "./NavigationBar.jsx"

function Footer() {

    const year = new Date().getFullYear();

    const links = [
        {name: "Privacy policy", path: "/privacy-policy"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"}
    ]

    return (
        <footer>
            <div className="inner-footer-container">
                <button>
                    &copy; {year}
                </button>
                <div>
                    <NavigationBar links={links}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer