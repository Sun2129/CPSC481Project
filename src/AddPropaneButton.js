import React, {Component} from 'react';
import {Total, SubTotal, Taxes, updateTotal, updateSubTotal, updateTaxes, Checkout, addItem, removeItem, getIndex} from './Variables.js';

var calculated = 0;
class DisplayAddGas extends Component{

	constructor(props) {
		super(props)

		this.state = {
			Initial: '',
			Final: '',
			disableSubmitButton: true
		}
	}
	
	AddPropane = (event) => {

		this.setState({
			Initial: '',
			Final: '',
			disableSubmitButton: true
		})

		event.preventDefault();
		this.props.onClose();
		
		var litres = (Number(event.target.Final.value) - Number(event.target.Initial.value))/0.575;
		
		var excise = litres * 4.0/100;
		
		var gst =  ((litres * 1.3) + excise) * 0.05;
		
		var totalTax = excise + gst;
		
		var sub = (litres * 1.3);
		
		addItem({'name': 'Propane Refill', 'quantity': litres, 'cost': sub, 'totalTax': totalTax}, "none");
		
		updateTotal(Total + sub + totalTax);
		updateSubTotal(SubTotal + sub);
		updateTaxes(Taxes + totalTax);
	}

	handleChange = e => {
		const field = e.target.name
		const value = e.target.value
		this.setState({
			[field]: value
		})
		this.checkValidation()
	}

	handleCancel = e => {
		this.setState({
			Initial: '',
			Final: '',
			disableSubmitButton: true
		})

		this.props.onClose();
	}

	checkValidation = e => {
		const {Initial,Final} = this.state

		var propaneForm = document.forms.pform;
		
		var formData = new FormData(propaneForm);
		
		var final1 = formData.get("Initial");
		
		var final2= formData.get("Final");

		let priceDiv = document.getElementById("Price");

		if (Number(final1) > 0 && Number(final2) > 0 && Number(final1) != null && Number(final2) != null && Number(final2) > Number(final1)) {
			
			console.log(Number(final2));
			console.log(Number(final1));

			let litres = ((Number(final2) - Number(final1))/0.575) * 1.3;

			calculated = litres

			priceDiv.innerText = calculated.toFixed(2);

			this.setState({
				disableSubmitButton: false
			})
		}
		else {
			calculated = 0

			priceDiv.innerText = '';

			this.setState({
				disableSubmitButton: true
			})
		}
	}
	
	render(){
		
		const {Initial,Final,disableSubmitButton} = this.state

		let dialog = (
			<div className="overlay">
				<form onSubmit={this.AddPropane} id="pform">
					<div className="GasDialog">
						
						<div className="AddGas_Div">ADD PROPANE</div>
						
						<div className="Initial_Div">
							<label for="Initial">Initial Weight (KG): </label>
							<input value={Initial} type="number" id="Initial" name="Initial" placeholder="Eg. 60 or 60.00" min="0.01" step="0.01" autoComplete = "off" onChange={this.handleChange}/>
						</div>
							
						<div className="Final_Div">	
							<label for="Final">Final Weight (KG): </label>
							<input value={Final} type="number" id="Final" name="Final" placeholder="Eg. 60 or 60.00" min="0.01" step="0.01" autoComplete = "off" onChange={this.handleChange}/>
						</div>
						
						<div className="Calculated_Div">
							<div className="CalculatedPriceLabel">Calculated Price: $</div>
							<div id="Price" className="Price"></div>
						</div>

						<div className="Complete_Cancel_Div">
							<button type="submit" value="Submit" className={disableSubmitButton ? 'Complete-inactive' : 'Complete'} disabled={disableSubmitButton}>Add</button>
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
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default DisplayAddGas;