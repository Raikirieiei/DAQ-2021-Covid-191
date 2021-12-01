import React from 'react'
import {Link} from 'react-router-dom';

const Chart_All_Nav = () => {
    return (
        <div>
            <div class="box-content h-36 pl-10 w-1/4 my-20 mx-auto bg-white rounded-xl shadow-md flex text-center items-center space-x-4">
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartall/chartall-newcase">New Case</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartall/chartall-newdeath">New Death</Link></button>
            <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartall/chartall-newrecovered">New Recovered</Link></button>

            </div>
        </div>
    )
}

export default Chart_All_Nav
