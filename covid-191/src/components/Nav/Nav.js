import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div class="box-content h-36 w-1/3 pl-20 pr-10 my-20 mx-auto bg-white rounded-xl shadow-md flex text-center items-center space-x-4">
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartday/chartday-newcase">Covid Per Day</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartall/chartall-newcase">Covid All Day</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartform">Covid Danger</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartvaccine">Covid Vaccine</Link></button>
        </div>
    )
}

export default Header 