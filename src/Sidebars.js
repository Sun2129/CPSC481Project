import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import './App_2.css';

const Sidebars = () => {
    const [toggled, setToggled] = React.useState(false);
  
    return (
      <div style={{ display: "flex", position: 'absolute'}}>
        <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" backgroundColor="#00b4ff" transitionDuration="500">
          <Menu>
			<div onClick={() => setToggled(false)} className="dashboardLogo">
				<img src="Shell_Logo.png" style={{width:"100px"}}></img>
				<h2>SHELLZ</h2>
			</div>
            <MenuItem icon={<img width='30px' src='/Home_Icon.png'/>} component={<Link to="/" />}> Home</MenuItem>
			
			<SubMenu label="Fuel" icon={<img width='30px' src='/Fuel_Icon.png'/>} rootStyles={{backgroundColor:"#00b4ff"}}>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}} component={<Link to="/Fuel_BarGraphs" />} icon={<img width='30px' src='/Bar_Icon.png'/>}>View Fuel</MenuItem>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}} component={<Link to="/UpdateFuel" />} icon={<img width='30px' src='/Update_Icon.png'/>}>Update Fuel</MenuItem>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}}component={<Link to="/Sales_Trends_Fuel" />} icon={<img width='30px' src='/Line_Icon.png'/>}>Sales Trends</MenuItem>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}} component={<Link to="/OrderFuel" />} icon={<img width='40px' src='/Order_Icon.png'/>}>Order Fuel</MenuItem>
			</SubMenu>
			
			<SubMenu label="Inventory" icon={<img width='30px' src='/Inventory_Icon.png'/>} rootStyles={{backgroundColor:"#00b4ff"}}>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}} component={<Link to="/BarGraph" />} icon={<img width='30px' src='/Bar_Icon.png'/>}>View Inventory</MenuItem>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}} component={<Link to="/Update_Inventory" />} icon={<img width='30px' src='/Update_Icon.png'/>}>Update Inventory</MenuItem>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}}component={<Link to="/Sales_Trends" />} icon={<img width='30px' src='/Line_Icon.png'/>}>Sales Trends</MenuItem>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}} component={<Link to="/Order_Inventory" />} icon={<img width='40px' src='/Order_Icon.png'/>}>Order Inventory</MenuItem>
				<MenuItem rootStyles={{backgroundColor:"#00b4ff"}} component={<Link to="/Set_Prices" />} icon={<img width='40px' src='/Prices_Icon.png'/>}>Set Prices</MenuItem>
			</SubMenu>
            <MenuItem icon={<img width='30px' src='/Pump_Icon.png'/>} component={<Link to="/PumpManagement" />}> Pumps</MenuItem>
            <MenuItem icon={<img width='30px' src='/Sale_Icon.png'/>} component={<Link to="/Promotions" />}> Promotions</MenuItem>
            <MenuItem icon={<img width='30px' src='/Checkout_Icon.png'/>} component={<Link to="/App" />}> Checkout</MenuItem>
          </Menu>
        </Sidebar>
        <main style={{display: 'flex', padding: 10 }}>
          <div>
			<img src={'/icons8-menu-50.png'} onClick={() => setToggled(!toggled)} class="img-hover" style={{cursor:'pointer'}}></img>
          </div>
        </main>
      </div>
  );
};

export default Sidebars;