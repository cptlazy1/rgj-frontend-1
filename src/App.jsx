
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

function App() {


  return (
    <>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>


    </>
  )
}

export default App
