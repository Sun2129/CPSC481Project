//import logo from './logo.svg';
import './App_2.css';
import {useState} from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import {Link} from 'react-router-dom';

function FuelManagment_Page() {
  const [firstState, setFirstState] = useState(false);
	const [secondState, setSecondState] = useState(false);
	const [thirdState, setThirdState] = useState(false);
	const [fourthState, setFourthState] = useState(true);
	const [fifthState, setFifthState] = useState(false);
	const [sixthState, setSixthState] = useState(false);
	
	const handleChange = (selectedOption) => {
		if(selectedOption.target.value == "30"){
			setFourthState(true);
			setFifthState(false);
			setSixthState(false);
		}
		
		if(selectedOption.target.value == "60"){
			setFourthState(false);
			setFifthState(true);
			setSixthState(false);
		}
		
		if(selectedOption.target.value == "90"){
			setFourthState(false);
			setFifthState(false);
			setSixthState(true);
		}
		
	}

  return (
    <body style={{height:"100%", width:"100%", backgroundImage: "url('/dashboard_bg2.jpg')", backgroundSize:"cover", position:"absolute", overflowY:"hidden" }}>
      <Sidebars />

	 	<div className="Fuel_Management">Fuel Management</div>

		<div className="InventoryManagementBody">

			<div className='Inventory_Management_Buttons'>
				<Link to="/Fuel_BarGraphs" className='dashboard-button' style={{border:'2px solid black'}}>
					<button className='dashboard-button'>View Fuel</button>
				</Link> 
				<Link to="/Sales_Trends_Fuel" className='dashboard-button' style={{border:'2px solid black'}}>
					<button className='dashboard-button'>Sales Trends</button>
				</Link>
				<Link to="/OrderFuel" className='dashboard-button' style={{border:'2px solid black'}}>
					<button className='dashboard-button'>Order Fuel</button>
				</Link>
			</div>
			
			<div className='Best_Sellers_Div'>

				<div className="Best_Sellers_Label_Div">
					<div className="Best_Sellers">Sales Overview</div>
					<select className='trend' onChange={handleChange}>
						<option className="Day30" id="Day30" value="30">Last Day 30</option>
						<option className="Day60" id="Day60" value="60">Last Day 60</option>
						<option className="Day90" id="button90" value="90">Last Day 90</option>
					</select>
				</div>

				<div className="Best_Sellers_Table_Div">
					{fourthState && (
						<table className="Sales_Table">
							<thead className="HeaderRow">
								<th>Fuel</th>
								<th>Units Sold</th>
							</thead>
							
							<tr>
								<td>Octane 87</td>
								<td>10000</td>
							</tr>
							<tr>
								<td>Octane 89</td>
								<td>3400</td>
							</tr>
							<tr>
								<td>Octane 93</td>
								<td>23000</td>
							</tr>
							<tr>
								<td>Diesel</td>
								<td>1000</td>
							</tr>
							<tr>
								<td>Propane</td>
								<td>400</td>
							</tr>
						</table>
					)}

					{fifthState && (
					<table className="Sales_Table">
							<thead className="HeaderRow">
								<th>Fuel</th>
								<th>Units Sold</th>
							</thead>
							
							<tr>
								<td>Octane 87</td>
								<td>31040</td>
							</tr>
							<tr>
								<td>Octane 89</td>
								<td>5790</td>
							</tr>
							<tr>
								<td>Octane 93</td>
								<td>18000</td>
							</tr>
							<tr>
								<td>Diesel</td>
								<td>2000</td>
							</tr>
							<tr>
								<td>Propane</td>
								<td>700</td>
							</tr>
						</table>
					)}


					{sixthState && (
					<table className="Sales_Table">
							<thead className="HeaderRow">
								<th>Fuel</th>
								<th>Units Sold</th>
							</thead>
							
							<tr>
								<td>Octane 87</td>
								<td>95600</td>
							</tr>
							<tr>
								<td>Octane 89</td>
								<td>11990</td>
							</tr>
							<tr>
								<td>Octane 93</td>
								<td>89000</td>
							</tr>
							<tr>
								<td>Diesel</td>
								<td>3000</td>
							</tr>
							<tr>
								<td>Propane</td>
								<td>1400</td>
							</tr>
						</table>
					)}
				</div>
			</div>
		</div>
      
    </body>
  );
}

export default FuelManagment_Page;
