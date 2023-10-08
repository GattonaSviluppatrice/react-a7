import React, { ReactFragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup/LoginSignup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Mostra la barra di navigazione su tutte le pagine */}
        <Routes>
          <Route path="/login">
            <LoginSignup action="Login" />
          </Route>
          <Route path="/signup">
            <LoginSignup action="Sign Up" />
          </Route>
          {/* Altre rotte e componenti possono essere aggiunti qui */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
