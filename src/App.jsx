import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Nav from "./pages/nav.jsx";
import Countries from "./pages/countries.jsx";

function App() {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/countries" element={<Countries/>}/>
            </Routes>
        </Router>
    );
}

export default App;
