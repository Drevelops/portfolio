import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
    <nav class="navbar">
        <div class="container">
            <ul class="nav-links">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>
            <ThemeToggle />
        </div>
    </nav>
    );
};

export default Navbar;