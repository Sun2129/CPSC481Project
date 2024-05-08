import './App.css';
import { useState, useEffect } from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import { days_sales } from './Variables';
import {Link} from 'react-router-dom';

function App() {
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

  var text = "Oreo         300 Units \nCheetos      70 Units\nMilk          23 units";
  return (
    <body style={{height:"100%", width:"100%", backgroundImage: "url('/dashboard_bg2.jpg')", backgroundSize:"cover", position:"absolute", overflowY:"hidden"}}>
      <Sidebars />
	  

		<div className="Fuel_Management">Inventory Management</div>

		<div className="InventoryManagementBody">

			<div className='Inventory_Management_Buttons'>
				<Link to="/BarGraph" className='dashboard-button' style={{border:'2px solid black'}}>
				<button className='dashboard-button'>Inventory</button>
				</Link> 
				<Link to="/Sales_Trends" className='dashboard-button' style={{border:'2px solid black'}}>
				<button className='dashboard-button'>Sales Trends</button>
				</Link> 
				<Link to="/Order_Inventory" className='dashboard-button' style={{border:'2px solid black'}}>
				<button className='dashboard-button'>Order Inventory</button>
				</Link> 
				<Link to="/Set_Prices" className='dashboard-button' style={{border:'2px solid black'}}>
				<button className='dashboard-button'>Set Prices</button>
				</Link> 
			</div>

			<div className='Best_Sellers_Div'>
		
				<div className="Best_Sellers_Label_Div">
					<div className="Best_Sellers">Best Sellers</div>

					<select className='trend' onChange={handleChange}>
						<option className="Day30" id="Day30" value="30">Last Day 30</option>
						<option className="Day60" id="Day60" value="60">Last Day 60</option>
						<option className="Day90" id="button90" value="90">Last Day 90</option>
					</select>
				</div>

				<div>
					{fourthState && (
						<div class="cards">
							<div class="sales_card">
							<img src='tea.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Tea</b></h4>
								<p>62</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='oreo.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Oreo</b></h4>
								<p>50</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='coffee.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Coffee</b></h4>
								<p>47</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='chips_ahoy.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Chips Ahoy</b></h4>
								<p>42</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='coffee_crisp.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Coffee Crisp</b></h4>
								<p>36</p>
							</div>
						</div>
						</div>
					)}

					{fifthState && (
					<div class="cards">
							<div class="sales_card">
							<img src='coffee.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Coffee</b></h4>
								<p>120</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='tea.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Tea</b></h4>
								<p>111</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='chips_ahoy.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Chips Ahoy</b></h4>
								<p>103</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='oreo.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Oreo</b></h4>
								<p>100</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='2l_soda.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>2L Soda</b></h4>
								<p>78</p>
							</div>
						</div>
						</div>
					)}


					{sixthState && (
					<div class="cards">
							<div class="sales_card">
							<img src='tea.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Tea</b></h4>
								<p>256</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='coffee.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Coffee</b></h4>
								<p>240</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='chips_ahoy.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Chips Ahoy</b></h4>
								<p>182</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='milk.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>Milk</b></h4>
								<p>170</p>
							</div>
						</div>
						<div class="sales_card">
							<img src='2l_soda.png' alt="Avatar"></img>
							<div class="cardcontainer">
								<h4><b>2L Soda</b></h4>
								<p>153</p>
							</div>
						</div>
						</div>
					)}
				</div>
			</div>
		</div>
    </body>
  );
}

export default App;
