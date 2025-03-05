import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [mode, setMode] = useState("standard");
    const [input, setInput] = useState("");
    const [theme, setTheme] = useState("grey"); // Default theme is grey
    const [showDropdown, setShowDropdown] = useState(false);

    const themes = ["grey", "light", "dark", "blue", "green", "purple", "orange", "pink"];

    useEffect(() => {
        document.body.className = "grey"; // Set initial theme to grey
    }, []);

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
        <div className="calculator-container">
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
                    {/* Scientific Mode Buttons (Only show when in scientific mode) */}
                    {mode === "scientific" && (
                        <>
                            <button className="scientific-btn" onClick={() => handleClick("sin(")}>sin</button>
                            <button className="scientific-btn" onClick={() => handleClick("cos(")}>cos</button>
                            <button className="scientific-btn" onClick={() => handleClick("tan(")}>tan</button>
                            <button className="scientific-btn" onClick={() => handleClick("log(")}>log</button>
                            <button className="scientific-btn" onClick={() => handleClick("sqrt(")}>√</button>
                            <button className="scientific-btn" onClick={() => handleClick("^")}>^</button>
                            <button className="scientific-btn" onClick={() => handleClick("π")}>π</button>
                            <button className="scientific-btn" onClick={() => handleClick("e")}>e</button>
                        </>
                    )}

                    {/* First Row: Clear, Parentheses, Divide */}
                    <button onClick={clearInput} className="clear">C</button>
                    <button onClick={() => handleClick("(")}>(</button>
                    <button onClick={() => handleClick(")")}>)</button>
                    <button onClick={() => handleClick("/")}>÷</button>

                    {/* Second Row: 7, 8, 9, Multiply */}
                    <button onClick={() => handleClick("7")}>7</button>
                    <button onClick={() => handleClick("8")}>8</button>
                    <button onClick={() => handleClick("9")}>9</button>
                    <button onClick={() => handleClick("*")}>×</button>

                    {/* Third Row: 4, 5, 6, Subtract */}
                    <button onClick={() => handleClick("4")}>4</button>
                    <button onClick={() => handleClick("5")}>5</button>
                    <button onClick={() => handleClick("6")}>6</button>
                    <button onClick={() => handleClick("-")}>−</button>

                    {/* Fourth Row: 1, 2, 3, Add */}
                    <button onClick={() => handleClick("1")}>1</button>
                    <button onClick={() => handleClick("2")}>2</button>
                    <button onClick={() => handleClick("3")}>3</button>
                    <button onClick={() => handleClick("+")}>+</button>

                    {/* Fifth Row: 0, Decimal, Equals */}
                    <button onClick={() => handleClick("0")} className="zero">0</button>
                    <button onClick={() => handleClick(".")}>.</button>
                    <button onClick={calculateResult}>=</button>
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
