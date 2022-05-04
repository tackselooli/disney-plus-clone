import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login"
import Header from "./components/Header"
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
    return (
        <div className="App">
            <Router basename="/disney-plus-clone">
                <Header/>
                <Routes>
                    <Route path="/" element={<Login/>}>
                    </Route>
                    <Route path="/home" element={<Home />}>
                    </Route>
                    <Route path='/detail/:id' element={<Detail />}>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
