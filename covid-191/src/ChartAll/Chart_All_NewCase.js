import React from 'react'
import Chart from '../components/ChartAllComponent/Chart_All_NewCase'
import Nav from '../components/Nav/Nav'
import ChartAllNav from '../components/ChartAllComponent/Chart_All_Nav'

const ChartNewCase = () => {
    return (
        <div>
            <Nav/>
            <ChartAllNav/>
            <Chart/>
        </div>
    )
}



export default ChartNewCase