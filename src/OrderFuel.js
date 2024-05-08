import './App_2.css';
import {useState} from 'react';
import Sidebars from './Sidebars.js';
import React from 'react';
import OrderFuel_PopUp from './OrderFuel_PopUp.js';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Octane87, Octane89, Octane93, Diesel, Propane, OrderFuel_O } from "./Variables.js";
import {Link} from 'react-router-dom';


// refrence 
// to get the increment code
// https://learnersbucket.com/examples/interview/increment-counter-component-in-react/
// to remove leading 0's
// https://www.geeksforgeeks.org/remove-leading-zeros-from-a-number-given-as-a-string/  

function OrderFuel() {
    const [firstState, setFirstState] = useState(false);

    const [Octane87_t, setOctane87_t] = useState(0);
    const [Octane89_t, setOctane89_t] = useState(0);
    const [Octane93_t, setOctane93_t] = useState(0);
    const [Diesel_t, setDiesel_t] = useState(0);
    const [Propane_t, setPropane_t] = useState(0);
    
    const Refresh = () => {
        setFirstState(false);
        setOctane87_t(0);
        setOctane89_t(0);
        setOctane93_t(0);
        setDiesel_t(0);
        setPropane_t(0);
    };

    const Final_Call = () => {
        setFirstState(true);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    
    const add_87 = () => {
        var int = Octane87_t +1;
        setOctane87_t(int);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_87 = () => {
        if((Octane87_t) >= 1){
         setOctane87_t(Octane87_t - 1);
         OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
        }
        
    }; 

    const add_89 = () => {
        setOctane89_t(Octane89_t + 1);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_89 = () => {
        if((Octane89_t) >= 1){
        setOctane87_t(Octane89_t - 1);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
        }
    }; 


    const add_93 = () => {
        setOctane93_t(Octane93_t + 1);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_93 = () => {
        if((Octane93_t) >= 1){
         setOctane93_t(Octane93_t - 1);
         OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
        }
    }; 


    const add_d = () => {
        setDiesel_t(Diesel_t + 1);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_d = () => {
        if((Diesel_t) >= 1){
        setDiesel_t(Diesel_t - 1);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
        }
    }; 

    const add_p = () => {
        setPropane_t(Propane_t + 1);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_p = () => {
        if((Propane_t) >= 1){
        setPropane_t(Propane_t - 1);
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
        }
    }; 

    const handleChange_87 = (inputText) => {
        const regex = new RegExp("^0+(?!$)",'g');
        if((inputText.target.value.length) > 1){
            inputText.target.value = inputText.target.value.replaceAll(regex, "");
        }
        else{
            setOctane87_t(0);
        }

        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
                setOctane87_t(Octane87_t);
            
        }
        else{
            if((int) >= 1){
                setOctane87_t(int);
            }
                
        }
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const handleChange_89 = (inputText) => {
        const regex = new RegExp("^0+(?!$)",'g');
        if((inputText.target.value.length) > 1){
            inputText.target.value = inputText.target.value.replaceAll(regex, "");
        }
        else{
            setOctane89_t(0);
        }

        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            setOctane89_t(Octane89_t);
        }
        else{
            if((int) >= 1){
            setOctane89_t(int);
            }
        }
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const handleChange_93 = (inputText) => {
        const regex = new RegExp("^0+(?!$)",'g');
        if((inputText.target.value.length) > 1){
            inputText.target.value = inputText.target.value.replaceAll(regex, "");
        }
        else{
            setOctane93_t(0);
        }
        inputText.target.value = inputText.target.value.replaceAll(regex, "");
        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            setOctane93_t(Octane93_t);
        }
        else{
            if((int) >= 1){
            setOctane93_t(int);
            }
        }
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const handleChange_d = (inputText) => {
        const regex = new RegExp("^0+(?!$)",'g');

        if((inputText.target.value.length) > 1){
            inputText.target.value = inputText.target.value.replaceAll(regex, "");
        }
        else{
            setDiesel_t(0);
        }

        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            setDiesel_t(Diesel_t);
        }
        else{
            if((int) >= 1){
            setDiesel_t(int);
            }
        }
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 


    const handleChange_p = (inputText) => {

        const regex = new RegExp("^0+(?!$)",'g');
        if((inputText.target.value.length) > 1){
        inputText.target.value = inputText.target.value.replaceAll(regex, "");
        }
        else{
            setPropane_t(0);
        }
        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            setPropane_t(Propane_t);
        }
        else{
            if((int) >= 1){
            setPropane_t(int);
            }
        }
        OrderFuel_O(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 



  return (
		<div>
		  <Sidebars />
		  <div className="Fuel_title">
			<h1>Order Fuel</h1>
		  </div>
		  {/* <div className='search'><input type="text" name="name" /></div> */}
			<div className="Fuel_Div">
				<table className="Fuel_Table">
					<thead className="HeaderRow">
						<th>Fuel</th>
						<th>Quantity</th>
						<th>ADD</th>
					</thead>

					<tr>

						<td>Octane 87</td>
						<td>{Octane87}</td>
						<td>
							<input type="number" min="0" onChange={handleChange_87} step="1" value={Octane87_t}/>
						</td>
					</tr>
					<tr>
						<td>Octane 89</td>
						<td>{Octane89}</td>
						<td>
							<input type="number" min="0" onChange={handleChange_89} step="1" value={Octane89_t}/>
						</td>
					</tr>
					<tr>
						<td>Octane 93</td>
						<td>{Octane93}</td>
						<td>            
							<input type="number" min="0" onChange={handleChange_93} step="1" value={Octane93_t}/>
						</td>    
					</tr>



					<tr>
						<td>Diesel</td>
						<td>{Diesel}</td>
						<td>            
							<input type="number" min="0" onChange={handleChange_d} step="1" value={Diesel_t}/>
						</td>
							
					</tr>
					<tr>
						<td>Propane</td>
						<td>{Propane}</td>
						<td> 
							<input type="number" min="0" onChange={handleChange_p} step="1" value={Propane_t}/>
						</td>
					</tr>
				</table>
			</div>

		  <div className="newGroup">
				<button className='dashboard-button' onClick={Final_Call} style={{border:'2px solid black'}}>Order and Submit</button>
		  </div>
		
		  {firstState && (

			<OrderFuel_PopUp isOpen={firstState} onClose={Refresh}></OrderFuel_PopUp>

		  )} 
		</div>
	);
}


export default OrderFuel;
