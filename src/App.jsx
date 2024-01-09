import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Faq from "./pages/Faq.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import Game from "./pages/Game.jsx";
import System from "./pages/System.jsx";
import AddGame from "./pages/AddGame.jsx";

function App() {


    return (
        <>
            <div className="header-holder">
                <Header/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/log-in" element={<Login/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/user-profile" element={<Profile/>}/>
                <Route path="/user-profile/games" element={<Game/>}/>
                <Route path="/user-profile/systems" element={<System/>}/>
                <Route path="/user-profile/add-game" element={<AddGame/>}/>
            </Routes>
            <div className="footer-holder">
                <Footer/>
            </div>

        </>
    )
}

export default App
