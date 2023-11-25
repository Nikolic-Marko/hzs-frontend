import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/LandingPage";
import { FindJob } from "./components/pages/FindJob";
import { OfferJob } from "./components/pages/OfferJob";
import { ApplicationForm } from "./components/pages/AplicationForm";
import LoginPage from "./components/pages/LoginPage";
import { useJwtValidation } from "./hooks/useJwtValidation";

function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useJwtValidation();

    if (!auth) {
        return <Navigate to="/login" />;
    }

    return children;
}

function LoginRedirect({ children }: { children: JSX.Element }) {
    let auth = useJwtValidation();

    if (auth) {
        return <Navigate to="/pocetna" />;
    }

    return children;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <LoginRedirect>
                            <LoginPage />
                        </LoginRedirect>
                    }
                />
                <Route path="/" element={<Navigate to="/pocetna" />} />
                <Route path="/pocetna" element={<LandingPage />} />
                <Route path="/pretraziOglase" element={<FindJob />} />
                <Route
                    path="/postaviOglas"
                    element={
                        <RequireAuth>
                            <OfferJob />
                        </RequireAuth>
                    }
                />
                <Route path="/prijava/:id" element={<ApplicationForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
