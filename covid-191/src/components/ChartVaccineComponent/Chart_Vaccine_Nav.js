import React from 'react'
import {Link} from 'react-router-dom';

const ChartVaccineNav = () => {
    return (
        <div>
            <div class="box-content h-36 w-1/4 pl-10 pr-10 my-20 mx-auto bg-white rounded-xl shadow-md flex text-center items-center space-x-4">
                <button class="py-3 px-2 ml-10 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartvaccine">Vaccine Province</Link></button>
                <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"><Link to="/chartcalculate">Vaccine Percentage</Link></button>
            </div>
        </div>
    )
}

export default ChartVaccineNav
