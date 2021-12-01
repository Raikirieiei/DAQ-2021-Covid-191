import React from 'react'
import Chart from '../components/ChartVaccineComponent/Chart_Cal'
import Nav from '../components/Nav/Nav'
import ChartVaccineNav from'../components/ChartVaccineComponent/Chart_Vaccine_Nav'

const ChartCal = () => {
    return (
        <div>
            <Nav/>
            <ChartVaccineNav/>
            <Chart/>
        </div>
    )
}

export default ChartCal