import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';
import Sidebars from './Sidebars';
import PumpManagement from './PumpManagement';
import PumpStatus from './PumpStatus';
import FuelManagment_Page from './FuelManagment_Page';
import Fuel_BarGraphs from './Fuel_BarGraphs';
import UpdateFuel from './UpdateFuel';
import Sales_Trends_Fuel from './Sales_Trends_Fuel';
import OrderFuel from './OrderFuel';
import Promotions from './Promotions';
import InventoryManagment_Page from './InventoryManagment_Page';
import BarGraph from './BarGraph';
import Update_Inventory from './Update_Inventory';
import Sales_Trends from './Sales_Trends';
import Set_Prices from './Set_Prices';
import Order_Inventory from './Order_Inventory';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Page_Routing(){
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path="/App" element={<App />} />
				<Route path="/PumpManagement" element={<PumpManagement />} />
				<Route path="/FuelManagment_Page" element={<FuelManagment_Page />} />
				<Route path="/Fuel_BarGraphs" element={<Fuel_BarGraphs />} />
				<Route path="/UpdateFuel" element={<UpdateFuel />} />
				<Route path="/Sales_Trends_Fuel" element={<Sales_Trends_Fuel />} />
				<Route path="/Promotions" element={<Promotions />} />
				<Route path="/InventoryManagment_Page" element={<InventoryManagment_Page />} />
				<Route path="/BarGraph" element={<BarGraph />} />
				<Route path="/Update_Inventory" element={<Update_Inventory />} />
				<Route path="/Sales_Trends" element={<Sales_Trends />} />
				<Route path="/Order_Inventory" element={<Order_Inventory />} />
				<Route path="/Set_Prices" element={<Set_Prices />} />
				<Route path="/OrderFuel" element={<OrderFuel />} />
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Page_Routing/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
