import React, {useState, useEffect} from "react";
//import "./Switch.css";
import "./Switch.css";

const Switch = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const darkMode = localStorage.getItem("darkmode");
    setIsDarkMode(darkMode === "active");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("darkmode", newMode);
    localStorage.setItem("darkmode", newMode ? "active" : "inactive");
  };

  return (
    <div>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isDarkMode}
          onClick={toggleDarkMode} 
        />
        <span className="slider" />
      </label>
    </div>
  );
};

//npm install classnames
export default Switch;
