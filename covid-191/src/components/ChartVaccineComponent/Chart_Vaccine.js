import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'


const BarChart = () => {
  const [covid, setCovid] = useState([])
  const [province, setProvince] = useState([])
  const [vaccine_count, setVaccineCount] = useState([])

  useEffect(() => {

    async function fetchData() {
      const response = await axios.get('http://127.0.0.1:8080/covid-191/covidvaccineprovincecount')
      setCovid(response.data)

      const provinceArray = []
      covid.map((c) =>{
        provinceArray.push(c["province"])
      })
      setProvince(provinceArray)

      const vaccineCountArray = []
      covid.map((c) =>{
        vaccineCountArray.push(c["vaccine_count"])
      })
      setVaccineCount(vaccineCountArray)

    }
    fetchData()

    }, [covid])

    const data = {
        labels: province,
        datasets: [
          {
            label: 'Vaccine In Each Province',
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
            data: vaccine_count
          }
        ]
      };
  return (
    <div>
      <div>
        <Bar data={data}/>
        </div>
    </div>
  )
}

export default BarChart