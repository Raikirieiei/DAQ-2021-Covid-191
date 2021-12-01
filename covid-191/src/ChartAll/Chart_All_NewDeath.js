import React from 'react'
import Chart from '../components/ChartAllComponent/Chart_All_NewDeath'
import Nav from '../components/Nav/Nav'
import ChartAllNav from '../components/ChartAllComponent/Chart_All_Nav'

const ChartNewDeath = () => {
    return (
        <div>
            <Nav/>
            <ChartAllNav/>
            <Chart/>
        </div>
    )
}


export default ChartNewDeath