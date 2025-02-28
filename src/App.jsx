import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";



const App=()=> {
  return (
    <Router>
      {/* <Home/> */}
      <Home/>
      <Routes>
            {/* <Route path="/" element={<Navbar />}></Route> */}
            {/* <Route path="/" element={<About />}></Route> */}
          </Routes>
    </Router>
  )
}

export default App;
