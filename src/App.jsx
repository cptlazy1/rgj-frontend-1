import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {


    return (
        <>
            <div className="header-holder">
                <Header/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <div className="footer-holder">
                <Footer/>
            </div>

        </>
    )
}

export default App
