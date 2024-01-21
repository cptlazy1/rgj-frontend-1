import './App.css'
import {Navigate, Route, Routes} from "react-router-dom"
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

import {AuthContext} from "./context/AuthContext.jsx"
import {useContext} from "react";

function App() {

    const {isAuthenticated, loading, role, username} = useContext(AuthContext)

    if (loading) {
        return <h1>Authenticating...</h1>
    }

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

                <Route path="/user-profile/:username"
                       element={isAuthenticated ? <Profile/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/game/:gameID"
                       element={isAuthenticated ? <Game/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/system/:systemID"
                       element={isAuthenticated ? <System/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/add-game"
                       element={isAuthenticated ? <AddGame/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/add-system"
                       element={isAuthenticated ? <AddSystem/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/my-games"
                       element={isAuthenticated ? <MyGames/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/my-systems"
                       element={isAuthenticated ? <MySystems/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/account"
                       element={isAuthenticated ? <Account/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/password"
                       element={isAuthenticated ? <Password/> : <Navigate to="/log-in"/>}/>
                <Route path="/user-profile/:username/email"
                       element={isAuthenticated ? <Email/> : <Navigate to="/log-in"/>}/>

                <Route path="/admin" element={isAuthenticated && role === "ADMIN" ? <Admin/> : !isAuthenticated ?
                    <Navigate to="/log-in"/> : <Navigate to={`/user-profile/${username}`}/>}/>
                <Route path="/admin/users" element={isAuthenticated && role === "ADMIN" ? <Users/> : !isAuthenticated ?
                    <Navigate to="/log-in"/> : <Navigate to={`/user-profile/${username}`}/>}/>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <div className="footer-holder">
                <Footer/>
            </div>

        </>
    )
}

export default App