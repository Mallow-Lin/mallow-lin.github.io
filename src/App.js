import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Service from "./pages/service/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { useState } from "react";

function App() {
    const [navbarHeight, setNavbarHeight] = useState(0)

    const handleSetNavbarHeight = (value) => {
        setNavbarHeight(value)
    }

    return (
        <Router>
            <Navbar setNavbarHeight={handleSetNavbarHeight} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About topPadding={navbarHeight} />} />
                <Route path="/Services" element={<Service topPadding={navbarHeight} />} />
                <Route path="/Resources" element={<About topPadding={navbarHeight} />} />
                <Route path="/Work" element={<About topPadding={navbarHeight} />} />
                <Route path="/Contact" element={<About topPadding={navbarHeight} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
