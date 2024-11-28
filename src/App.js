import React, { useState, useEffect } from "react";
import "./components/UI/ThemeSwitch.css";
import { AuthContext } from "./components/context";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter'

export function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkmode");
    if (darkMode === "active") {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, []);

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
          isLoading,
        }}
      >
        <div className="root">
          <AppRouter/>
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
