import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [mode, setMode] = useState("standard");
    const [input, setInput] = useState("");
    const [theme, setTheme] = useState("light");
    const [showDropdown, setShowDropdown] = useState(false);

    const themes = ["light", "dark", "blue", "green", "purple", "orange", "pink"];

    const handleClick = (value) => {
        if (value === " ") return;
        setInput(input + value);
    };

    const clearInput = () => {
        setInput("");
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const changeTheme = (selectedTheme) => {
        setTheme(selectedTheme);
        document.body.className = selectedTheme;
        setShowDropdown(false);
    };

    return (
        <div className={`calculator-container`}>
            {/* Left Side - GitHub Profile */}
            <div className="sidebar">
                <a href="https://github.com/hetdabhi" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.com/hetdabhi.png" alt="GitHub" className="profile-pic" />
                    <p className="username">Het Dabhi</p>
                </a>
            </div>

            {/* Calculator */}
            <div className="calculator">
                <div className="mode-switch">
                    <button className={mode === "standard" ? "active" : ""} onClick={() => setMode("standard")}>
                        Standard
                    </button>
                    <button className={mode === "scientific" ? "active" : ""} onClick={() => setMode("scientific")}>
                        Scientific
                    </button>
                </div>

                <div className="display">{input || "0"}</div>
                <div className="buttons">
                    {mode === "scientific" && ["sin", "cos", "tan", "log", "sqrt", "^"].map((val) => (
                        <button onClick={() => handleClick(val)} key={val}>{val}</button>
                    ))}
                    {["7", "8", "9", "/"].map((val) => (
                        <button onClick={() => handleClick(val)} key={val}>{val}</button>
                    ))}
                    {["4", "5", "6", "*"].map((val) => (
                        <button onClick={() => handleClick(val)} key={val}>{val}</button>
                    ))}
                    {["1", "2", "3", "-"].map((val) => (
                        <button onClick={() => handleClick(val)} key={val}>{val}</button>
                    ))}
                    {["0", ".", "=", "+"].map((val) => (
                        <button onClick={val === "=" ? calculateResult : () => handleClick(val)} key={val}>{val}</button>
                    ))}
                    <button onClick={clearInput} className="clear">C</button>
                </div>
            </div>

            {/* Right Side - Theme Toggle */}
            <div className="theme-container">
                <p className="theme-text">Tap to change theme</p>
                <button className="theme-button" onClick={() => setShowDropdown(!showDropdown)}>
                    🎨
                </button>
                {showDropdown && (
                    <div className="theme-dropdown">
                        {themes.map((t) => (
                            <div key={t} className={`color-dot ${t}`} onClick={() => changeTheme(t)}></div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;
