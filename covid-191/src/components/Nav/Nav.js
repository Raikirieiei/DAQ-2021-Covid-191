import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div class="py-10 px-1 max-w-sm my-20 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-3">
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Covid-all</button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Covid</button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartday">Covid-per-day</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Vaccine</button>
        </div>

    )
}

export default Header 