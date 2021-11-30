import React from 'react'
import { Pie} from 'react-chartjs-2'
import { Link } from 'react-router-dom';


const PieChart = () => {
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
        labels: ["Astra","Sinovac + Astra","Sinovac"],
        datasets: [
          {
            display: true,
            backgroundColor: ["rgb(255, 99, 132)",'rgb(54, 162, 235)','rgb(255, 205, 86)'],
            borderColor: "rgba(75,192,192,1)",
            data: [10,20,30]
          }
        ],
        hoverOffset: 4
      };
  return (
    <div>
      <div class="box-content h-20 w-60 pl-2 mx-auto bg-white rounded-xl shadow-md flex text-center items-center space-x-4">
        <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartvaccine">Vaccine</Link></button>
        <button class="py-3 px-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"><Link to="/chartcalculate">Vaccine Calculate</Link></button>
      </div>
      <div style={{ height:'500px',width:'500px',margin:'0 auto' }}>
        <Pie data={data} options={options}/>
        </div>
    </div>
  )
}

export default PieChart