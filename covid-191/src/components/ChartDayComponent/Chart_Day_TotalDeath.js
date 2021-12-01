import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'


const BarChart = () => {
    const [covid, setCovid] = useState([])
    const [province, setProvince] = useState([])
    const [total_death, setTotal_Death] = useState([])
    const [date, setDate] = useState([])

    useEffect(() => {

      async function fetchData() {
        const response = await axios.get('http://127.0.0.1:8080/covid-191/covidperdayfull')
        setCovid(response.data)

        const provinceArray = []
        covid.map((c) =>{
          provinceArray.push(c["province"])
        })
        setProvince(provinceArray)

        const totaldeathArray = []
        covid.map((c) =>{
            totaldeathArray.push(c["total_death"])
        })
        setTotal_Death(totaldeathArray)

        const dateArray = []
        covid.map((c) =>{
          dateArray.push(c["date"])
        })
        setDate(dateArray)
      }
      fetchData()
    }, [covid])
    
    
    const data = {
        
        labels: province,
        datasets: [
          {
            label: "Total Death",
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
            data: total_death,
          }
        ]
      };
  return (
    <div>
        <div class="text-2xl text-right mr-20 ">
          <p>Date: {date[0]}</p>
        </div>
        <Bar data={data}/>
    </div>
  )
}

export default BarChart