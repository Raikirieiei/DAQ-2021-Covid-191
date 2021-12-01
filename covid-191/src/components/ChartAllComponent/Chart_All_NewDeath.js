import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'


const BarChart = () => {
    const [covid, setCovid] = useState([])
    const [date, setDate] = useState([])
    const [new_death, setNew_Death] = useState([])
    const [total_death, setTotal_Death] = useState([])
    useEffect(() => {

      async function fetchData() {
        const response = await axios.get('http://127.0.0.1:8080/covid-191/covidall')
        setCovid(response.data)

        const dateArray = []
        covid.map((c) =>{
          dateArray.push(c["date"])
        })
        setDate(dateArray)

        const newdeathArray = []
        covid.map((c) =>{
          newdeathArray.push(c["new_death"])
        })
        setNew_Death(newdeathArray)
        
        const totaldeathArray = []
        covid.map((c) =>{
            totaldeathArray.push(c["total_death"])
        })
        setTotal_Death(totaldeathArray)

      }
      fetchData()
    }, [covid])
    
    
    const data = {
        
        labels: date,
        datasets: [
          {
            label: "New Death",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: new_death,
          }
        ]
      };
  return (
    <div>
        <div class="text-2xl text-right mr-20 ">
          <p>Total Deaths: {total_death[total_death.length-1]}</p>
          <p>From: {date[0]} To {date[date.length-1]}</p>
        </div>
        <Bar data={data}/>
    </div>
  )
}

export default BarChart