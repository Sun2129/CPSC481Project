import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Sidebars from './Sidebars';

const labels = ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', 
                '11','12', '13', '14', '15', '16', '17', '18','19', '20',
                '21','22', '23', '24', '25', '26', '27', '28','29', '30'];

const Sales_Trends_Fuel = {
    labels: labels,
    datasets: [{
        label: 'Octane 87 Sales',
        data: [15, 38, 28, 51, 10, 45, 63, 42, 5, 20, 59, 31, 6, 25, 53, 8, 56, 14, 60, 22, 35, 4, 29, 49, 2, 19, 48, 12, 55, 41],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    },
    {      
        label: 'Octane 89 Sales',
        data: [32, 3, 13, 60, 23, 7, 44, 50, 1, 16, 54, 11, 64, 17, 58, 39, 9, 33, 21, 52, 24, 46, 30, 47, 31, 37, 62, 27, 61, 18],
        fill: false,
        borderColor: 'rgb(75, 200, 12)',
        tension: 0.1
    },
    {      
        label: 'Octane 93 Sales',
        data: [57, 36, 0, 26, 43, 34, 5, 2, 12, 59, 16, 48, 30, 6, 53, 25, 8, 19, 9, 63, 47, 41, 4, 61, 15, 22, 37, 20, 56, 58],
        fill: false,
        borderColor: 'rgb(200, 0, 12)',
        tension: 0.1
    },
    {      
        label: 'Diesel Sales',
        data: [50, 8, 29, 1, 55, 27, 46, 14, 39, 20, 12, 59, 6, 63, 32, 24, 51, 3, 42, 61, 18, 31, 58, 5, 2, 9, 37, 45, 7, 16],
        fill: false,
        borderColor: 'rgb(200, 200, 200)',
        tension: 0.1
    },
    {      
        label: 'Propane Sales',
        data: [22, 11, 41, 19, 57, 30, 53, 62, 26, 44, 3, 61, 16, 14, 35, 0, 24, 9, 64, 12, 47, 33, 52, 10, 40, 58, 7, 34, 28, 6],
        fill: false,
        borderColor: 'rgb(7, 0, 1)',
        tension: 0.1
    }
    
        ]
    };

const FuelLineGraph = () => {
    const [visibleLines, setVisibleLines] = useState(() =>
    Sales_Trends_Fuel.datasets.map((dataset) => dataset.label)
    );

    const legendClickHandler = (label) => {
        setVisibleLines((prevVisibleLines) => {
        if (prevVisibleLines.length === 1 && prevVisibleLines.includes(label)) {
            return Sales_Trends_Fuel.datasets.map((dataset) => dataset.label);
        } else {
            return [label];
        }
        });
    };

    const options = {
		maintainAspectRatio: false,
        indexAxis: 'x',
        onClick: (_, activeElements) => {
			if (activeElements.length > 0) {
				const label = {Sales_Trends_Fuel}.datasets[activeElements[0]._datasetIndex].label;
				legendClickHandler(label);
			}
        },
        plugins: {
			legend: {
				labels:{
				  font:{
					size: 22
				  }  
			    },
				onClick: (e, legendItem) => {
				legendClickHandler(legendItem.text)
				},
			},
        },
		scales: {
			y:{
				title:{
					display: true,
					text: 'Units Sold',
					font:{
						size: 20
					}
				},
				ticks:{
					color: 'black',
					font:{
						size: 17
					}
				}
			},
			x: {
				title:{
					display: true,
					text: 'Last 30 Days',
					font:{
						size: 20
					}
				},
				beginAtZero: true,
				suggestedMax: 100,
				ticks:{
					color: 'black',
					font:{
						size: 17
					}
				}
			},
		},
    };
	
    const filteredDatasets = Sales_Trends_Fuel.datasets.filter((dataset) =>
    visibleLines.includes(dataset.label)
    );

    const visibleData = { ...Sales_Trends_Fuel, datasets: filteredDatasets };

    return (
        <div>
			<Sidebars />
			<div className="corner">Sales Trends</div>
			<div className="SalesTrends">
				<Line options={options} data={visibleData} />
			</div>
        </div>
    );
    };
    
    export default FuelLineGraph;
      