import React from 'react'
import {Link} from 'react-router-dom';

const ChartDayNav = () => {
    return (
        <div>
            <div class="box-content h-36 w-1/4 pl-10 pr-10 my-20 mx-auto bg-white rounded-xl shadow-md flex text-center items-center space-x-4">
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartday/chartday-newcase">New Case</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartday/chartday-totalcase">Total Case</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartday/chartday-newdeath">New Death</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartday/chartday-totaldeath">Total Death</Link></button>
            </div>
        </div>
    )
}

export default ChartDayNav
