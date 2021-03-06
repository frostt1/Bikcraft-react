// css app global
import "./App.css";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";

//pages
import Home from "./pages/Home/Home";
import Bicicletas from "./pages/Bicicleta/Bicicletas";
import Contato from "./pages/Contato/Contato";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bicicleta" element={<Bicicletas />} />
                <Route path="/contato" element={<Contato />} />
                {/* nested routes */}
                <Route path="/bicicletas/:id" element={<Bicicletas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
