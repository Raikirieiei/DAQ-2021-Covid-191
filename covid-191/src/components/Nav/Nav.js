import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div class="box-content h-36 max-w-lg pl-20 my-20 mx-auto bg-white rounded-xl shadow-md flex text-center items-center space-x-4">
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartday">Covid per day</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartall">Covid all day</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartform">Covid safety</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Vaccine</button>
        </div>

    )
}

export default Header 