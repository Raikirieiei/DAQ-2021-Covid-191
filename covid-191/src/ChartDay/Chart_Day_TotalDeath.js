import React from 'react'
import Chart from '../components/ChartDayComponent/Chart_Day_TotalDeath'
import Nav from '../components/Nav/Nav'
import ChartDayNav from '../components/ChartDayComponent/Chart_Day_Nav'

const ChartDay = () => {
    return (
        <div>
            <Nav/>
            <ChartDayNav/>
            <Chart/>
        </div>
    )
}

export default ChartDay
