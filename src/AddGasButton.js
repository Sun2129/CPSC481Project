import React, {Component} from 'react';
import {Total, SubTotal, Taxes, Pump_1, Pump_2, Pump_3, Pump_4, Pump_5, Pump_6, updateTotal, updateSubTotal, updateTaxes, addItem, setTimeID, removeTime} from "./Variables.js";

class DisplayAddGas extends Component{

	constructor(props) {
		super(props)

		this.state = {
			Pay_Amount: '',
			Pump: false,
			Gas: false,
			disableSubmitButton: true
		}
	}

	handleChange = e => {
		const field = e.target.name
		const value = e.target.type === 'radio' ? e.target.checked : e.target.value;
		console.log(field + ": "+value);
		this.setState({
			[field]: value
		})
	}

	handleCancel = e => {
		this.setState({
			Pay_Amount: '',
			Pump: false,
			Gas: false,
			disableSubmitButton: true
		})

		this.props.onClose();
	}

	componentDidUpdate() {
		const {Pay_Amount,Pump,Gas,disableSubmitButton} = this.state;

		if (disableSubmitButton === true && Pump && Gas && Number(Pay_Amount) != null && Number(Pay_Amount) > 0) {

			this.setState({
				disableSubmitButton: false
			})
		}
		else if ((disableSubmitButton === false && (!Pump || !Gas || Number(Pay_Amount) == null || Number(Pay_Amount) <= 0))) {
			this.setState({
				disableSubmitButton: true
			})
		}

	}

	updateRadio(){
		removeTime()
		
		if(Pump_1 == "In Use" || Pump_1 == "Out of Order" || Pump_1 == "Testing..."){
			document.getElementById("pump1").disabled = true;
			
			let label = document.getElementById("pump1label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump1").disabled = false;
			
			let label = document.getElementById("pump1label");
			label.style.color = "#000000";
		}
		
		if(Pump_2 == "In Use" || Pump_2 == "Out of Order" || Pump_2 == "Testing..."){
			document.getElementById("pump2").disabled = true;
			
			let label = document.getElementById("pump2label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump2").disabled = false;
			
			let label = document.getElementById("pump2label");
			label.style.color = "#000000";
		}
		
		if(Pump_3 == "In Use" || Pump_3 == "Out of Order" || Pump_3 == "Testing..."){
			document.getElementById("pump3").disabled = true;
			
			let label = document.getElementById("pump3label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump3").disabled = false;
			
			let label = document.getElementById("pump3label");
			label.style.color = "#000000";
		}
		
		if(Pump_4 == "In Use" || Pump_4 == "Out of Order" || Pump_4 == "Testing..."){
			document.getElementById("pump4").disabled = true;
			
			let label = document.getElementById("pump4label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump4").disabled = false;
			
			let label = document.getElementById("pump4label");
			label.style.color = "#000000";
		}
		
		if(Pump_5 == "In Use" || Pump_5 == "Out of Order" || Pump_5 == "Testing..."){
			document.getElementById("pump5").disabled = true;
			
			let label = document.getElementById("pump5label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump5").disabled = false;
			
			let label = document.getElementById("pump5label");
			label.style.color = "#000000";
		}
		
		if(Pump_6 == "In Use" || Pump_6 == "Out of Order" || Pump_6 == "Testing..."){
			document.getElementById("pump6").disabled = true;
			
			let label = document.getElementById("pump6label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump6").disabled = false;
			
			let label = document.getElementById("pump6label");
			label.style.color = "#000000";
		}
	}
	
	AddGas = (event) => {

		this.setState({
			Pay_Amount: '',
			Pump: false,
			Gas: false,
			disableSubmitButton: true
		})

		event.preventDefault();
		this.props.onClose();
	
		var radio = document.getElementsByName("Gas");
		var type = "Regular"
		
		for(let i = 0; i < radio.length; i++){
			if(radio[i].checked){
				type = radio[i].value;
			}
		}
		
		var radioPump = document.getElementsByName("Pump");
		var pump = "pump1";
		
		for(let i = 0; i < radioPump.length; i++){
			if(radioPump[i].checked){
				pump = radioPump[i].value;
			}
		}
		
		var litres = 0;
		var excise = 0;
		
		if(type == "Regular"){
			litres = Number(event.target.Pay_Amount.value)/1.299;
			excise = litres * 10.0/100;
		}
		
		else if (type == "Premium"){
			litres = Number(event.target.Pay_Amount.value)/1.492;
			excise = litres * 10.0/100;
		}
		
		else if(type == "Nitro"){
			litres = Number(event.target.Pay_Amount.value)/1.567;
			excise = litres * 10.0/100;
		}
		
		else if(type == "Diesel"){
			litres = Number(event.target.Pay_Amount.value)/1.654;
			excise = litres * 4.0/100;
		}
		
		var gst = (Number(event.target.Pay_Amount.value) + excise) * 0.05;
		
		var totalTax = excise + gst;
		
		var sub =  Number(event.target.Pay_Amount.value) - totalTax;
		
		addItem({'name': type, 'quantity': litres, 'cost': sub, 'totalTax': totalTax}, pump);
		
		updateTotal(Total + sub + totalTax);
		updateSubTotal(SubTotal + sub);
		updateTaxes(Taxes + totalTax);
	}
	
	render(){

		const {Pay_Amount, pumpSelected, fuelSelected, disableSubmitButton} = this.state

		let dialog = (
			<div className="overlay">
				<form onSubmit={this.AddGas}>
					<div className="GasDialog">

						<div className="AddGas_Div">ADD GAS</div>
						<div className="Pump_Div">
							<div className="Pump_label">Select Pump</div>
							<div className="Pump_Selection">

								<div className="pump1Div">
									<input type="radio" id="pump1" name="Pump" value="pump1" onChange={this.handleChange}/>
									<label id="pump1label" for="pump1">Pump 1 ({Pump_1})</label>
								</div>
								
								<div className="pump2Div">
									<input type="radio" id="pump2" name="Pump" value="pump2" onChange={this.handleChange}/>
									<label id="pump2label" for="pump2">Pump 2 ({Pump_2})</label>
								</div>
								
								<div className="pump3Div"> 
									<input type="radio" id="pump3" name="Pump" value="pump3" onChange={this.handleChange}/>
									<label id="pump3label" for="pump3">Pump 3 ({Pump_3})</label>
								</div>
								
								<div className="pump4Div">
									<input type="radio" id="pump4" name="Pump" value="pump4" onChange={this.handleChange}/>
									<label id="pump4label" for="pump4">Pump 4 ({Pump_4})</label>
								</div>
								
								<div className="pump5Div">
									<input type="radio" id="pump5" name="Pump" value="pump5" onChange={this.handleChange}/>
									<label id="pump5label" for="pump5">Pump 5 ({Pump_5})</label>
								</div>
								
								<div className="pump6Div">
									<input type="radio" id="pump6" name="Pump" value="pump6" onChange={this.handleChange}/>
									<label id="pump6label" for="pump6">Pump 6 ({Pump_6})</label>
								</div>
							</div>
						</div>
							
						<div className="Gas_Div">	
							<div className="Gas_Label">Select Fuel Type</div>
							<div className="Gas_Selection">
								<div className="RegularDiv">
									<input type="radio" id="Regular" name="Gas" value="Regular" onChange={this.handleChange}/>
									<label for="Regular">Regular</label>
								</div>
								
								<div className="PremiumDiv">
									<input type="radio" id="Premium" name="Gas" value="Premium" onChange={this.handleChange}/>
									<label for="Premium">Premium</label>
								</div>
								
								<div className="NitroDiv">
									<input type="radio" id="Nitro" name="Gas" value="Nitro" onChange={this.handleChange}/>
									<label for="Nitro">Nitro</label>
								</div>
								
								<div className="DieselDiv">
									<input type="radio" id="Diesel" name="Gas" value="Diesel" onChange={this.handleChange}/>
									<label for="Diesel">Diesel</label>
								</div>
								
							</div>
							
						</div>
						
						<div className="Pay_Div">
							<label className="Pay_Div_Label">Pay Amount:</label>
							<label for="Pay Amount">$</label>
							<input value={Pay_Amount} type="number" min="0" id="Pay Amount" name="Pay_Amount" step="0.01"
							placeholder="Enter amount using keyboard - Eg. 60 or 60.00" autoComplete = "off"
							onChange={this.handleChange}/>
						</div>
						<div className="Complete_Cancel_Div">
							<button type="submit" className={disableSubmitButton ? 'Complete-inactive' : 'Complete'} disabled={disableSubmitButton}>Add</button>
							<button className="Cancel" onClick={this.handleCancel}>Cancel</button>
						</div>
					</div>
				</form>
			</div>
		);
		
		if(! this.props.isOpen){
			dialog = null;
		}
		
		else{
			setTimeID(setTimeout(() => {
				this.updateRadio();
			}, 0));
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default DisplayAddGas;