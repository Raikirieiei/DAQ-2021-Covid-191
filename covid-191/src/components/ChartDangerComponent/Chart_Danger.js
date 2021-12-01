import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'

const BarChart = () => {
    const [covid, setCovid] = useState([])
    const [province, setProvince] = useState([])
    const [danger, setDanger] = useState([])

    useEffect(() => {

      async function fetchData() {
        const response = await axios.get('http://127.0.0.1:8080/covid-191/coviddanger')
        setCovid(response.data)

        const provinceArray = []
        covid.map((c) =>{
          provinceArray.push(c["province"])
        })
        setProvince(provinceArray)

        const dangerArray = []
        covid.map((c) =>{
          dangerArray.push(c["danger"])
        })
        setDanger(dangerArray)

      }
      fetchData()
    }, [covid])
    
    const data = {
        labels: province,
        datasets: [
          {
            label: "DANGER",
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
            data: danger
          }
        ],
      };
  return (
    <div>
      <div class='box-boarder w-1/6 p-3 pl-10 border-4 my-5 mx-auto font-semibold rounded-lg text-xl shadow-md text-white bg-blue-500'>
        <h1 class="ml-5">Covid Danger</h1>
      </div>
      
        <Bar data={data}/>
    </div>
  )

  
}

export default BarChart 