import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/LandingPage";
import { FindJob } from "./components/pages/FindJob";
import { OfferJob } from "./components/pages/OfferJob";
import { ApplicationForm } from "./components/pages/AplicationForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pretraziOglase" element={<FindJob />} />
                <Route path="/postaviOglas" element={<OfferJob />} />
                <Route path="/prijava/:id" element={<ApplicationForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
