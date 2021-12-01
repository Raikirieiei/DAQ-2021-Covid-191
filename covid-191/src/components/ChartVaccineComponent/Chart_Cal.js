import React, {useState, useEffect} from 'react'
import { Pie} from 'react-chartjs-2'
import axios from 'axios'


const PieChart = () => {
  const [covid, setCovid] = useState([])
  const [vaccine_name, setVaccineName] = useState([])
  const [vaccine_count, setVaccineCount] = useState([])

  useEffect(() => {

    async function fetchData() {
      const response = await axios.get('http://127.0.0.1:8080/covid-191/covidvaccinenamecount')
      setCovid(response.data)

      const vaccineNameArray = []
      covid.map((c) =>{
        vaccineNameArray.push(c["vaccine_name"])
      })
      setVaccineName(vaccineNameArray)

      const vaccineCountArray = []
      covid.map((c) =>{
        vaccineCountArray.push(c["vaccine_count"])
      })
      setVaccineCount(vaccineCountArray)

    }
    fetchData()

    }, [covid])

    const options = {
        plugins: {
            datalabels: {
                display: true,
                padding:{
                    bottom:20,
                    weight: 'bold'
                },
                responsive:true,
                animation:{
                    animateScale: true,
                               }
            }
        }
    
    }


    const data = {
        labels: vaccine_name,
        datasets: [
          {
            display: true,
            backgroundColor: ["rgb(255, 99, 132)", 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(50, 205, 50)', 'rgb(186, 85, 211)'],
            borderColor: "rgba(75, 192, 192, 1)",
            data: vaccine_count
          }
        ],
        hoverOffset: 4
      };
  return (
    <div> 
      <div style={{ height:'500px',width:'500px',margin:'0 auto' }}>
        <Pie data={data} options={options}/>
        </div>
    </div>
  )
}

export default PieChart