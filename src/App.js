import { useState } from "react";
// React Router Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// Components
import Alert from "./components/Alert";
import Details from "./components/pages/Details";
import Error from "./components/pages/Error";
import Features from "./components/pages/Features";
// Pages
import Home from "./components/pages/Home";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <>
      <BrowserRouter>
        <TheHeader className="relative" />

        {/* Alert */}
        <Alert
          alert={alert}
          className="absolute top-28 right-3 md:top-10 md:right-10"
        />

        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="features" element={<Features />} />
          <Route path="details" element={<Details />} />
          {/* 404 page not found */}
          <Route path="*" element={<Error />} />
        </Routes>

        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
