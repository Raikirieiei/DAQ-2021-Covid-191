import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'

const BarChart = () => {
    const [covid, setCovid] = useState([])
    const [date, setDate] = useState([])
    

    useEffect(() => {

      async function fetchData() {
        const response = await axios.get('http://127.0.0.1:8080/covid-191/covidall')
        setCovid(response.data)

        const dateArray = []
        covid.map((c) =>{
          dateArray.push(c["date"])
        })
        setDate(dateArray)

      }
      fetchData()
    }, [covid])
    
    
    const data = {
        
        labels: date,
        datasets: [
          {
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
            // data: [1500000, 3900000, 3000000, 4100000, 2300000, 1800000, 2000000]
          }
        ]
      };
  return (
    <div>
      <div class='box-boarder w-40 p-4 border-4 my-5 mx-auto font-semibold rounded-lg text-xl shadow-md text-white bg-green-500'>
        <h1>Covid all day</h1>
      </div>
        <Bar data={data}/>
    </div>
  )
}




export default BarChart