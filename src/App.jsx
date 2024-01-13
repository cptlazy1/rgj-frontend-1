import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Faq from "./pages/Faq.jsx"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Profile from "./pages/Profile.jsx"
import Game from "./pages/Game.jsx"
import System from "./pages/System.jsx"
import AddGame from "./pages/AddGame.jsx"
import AddSystem from "./pages/AddSystem.jsx"
import MyGames from "./pages/MyGames.jsx"
import MySystems from "./pages/MySystems.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import Account from "./pages/Account.jsx"
import Password from "./pages/Password.jsx"
import Email from "./pages/Email.jsx"
import Admin from "./pages/Admin.jsx"
import Users from "./pages/Users.jsx"

import { AuthContext } from "./context/AuthContext.jsx"
import {useContext} from "react";

function App() {

    const { isAuthenticated } = useContext(AuthContext)

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
                <Route path="/user-profile/game" element={<Game/>}/>
                <Route path="/user-profile/system" element={<System/>}/>
                <Route path="/user-profile/add-game" element={<AddGame/>}/>
                <Route path="/user-profile/add-system" element={<AddSystem/>}/>
                <Route path="/user-profile/my-games" element={<MyGames/>}/>
                <Route path="/user-profile/my-systems" element={<MySystems/>}/>
                <Route path="/user-profile/account" element={<Account/>}/>
                <Route path="/user-profile/password" element={<Password/>}/>
                <Route path="/user-profile/email" element={<Email/>}/>

                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/users" element={<Users/>}/>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <div className="footer-holder">
                <Footer/>
            </div>

        </>
    )
}

export default App