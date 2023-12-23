import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {


    return (
        <>

            <div>
                <div>
                    <Header/>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <div>
                    <Footer/>
                </div>
            </div>

        </>
    )
}

export default App
