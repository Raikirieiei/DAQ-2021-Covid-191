import React from 'react'
import Chart from '../components/ChartVaccineComponent/Chart_Vaccine.js'
import Nav from '../components/Nav/Nav.js'
import ChartVaccineNav from'../components/ChartVaccineComponent/Chart_Vaccine_Nav'

const ChartVaccine = () => {
    return (
        <div>
            <Nav/>
            <ChartVaccineNav/>
            <Chart/>
        </div>
    )
}

export default ChartVaccine