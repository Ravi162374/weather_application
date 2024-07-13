import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <div>
                <h1>WeatherReport</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/Home" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fa-solid fa-house"></i>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Forecast" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fa-solid fa-bolt"></i>Forecast
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <i className="fa-solid fa-envelope"></i>Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
