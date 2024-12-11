import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

  return (
    <>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md absolute transform hover:scale-105 transition-all" onClick={() => navigate('/')}>Go back</button>
        <nav className="bg-gray-700 shadow-lg py-8 px-6 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-80 flex flex-col items-center space-y-6">
                <div className="text-teal-700 text-4xl font-bold mb-8">Mes Défis</div>
                    <ul className="flex flex-col space-y-6 text-teal-700 font-semibold text-xl w-full items-center">
                        <li>
                            <NavLink 
                            to="/challenge-1" 
                            className={({ isActive }) => isActive ? "text-teal-900" : "hover:text-teal-900 transition"}
                            >Défi 1</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/challenge-2" 
                            className={({ isActive }) => isActive ? "text-teal-900" : "hover:text-teal-900 transition"}
                            >Défi 2</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/challenge-3" 
                            className={({ isActive }) => isActive ? "text-teal-900" : "hover:text-teal-900 transition"}
                            >Défi 3</NavLink>
                        </li>
                </ul>
            </div>
        </nav>
    </>
    );
}

export default Navbar;