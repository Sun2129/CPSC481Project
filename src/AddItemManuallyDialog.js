import React, {Component} from 'react';
import {Total, SubTotal, Taxes, updateTotal, updateSubTotal, updateTaxes, inventory, Checkout, addItem, removeItem, getIndex} from './Variables.js';

var calculated = 0;
class DisplayAddItemManually extends Component {

	constructor(props) {
		super(props)

		this.state = {
			Quantity: '',
			ItemName: '',
			quantityValid: false,
			itemNameValid: false,
			disableSubmitButton: true
		}
	}

    AddItem = (event) =>{

		this.setState({
			Quantity: '',
			ItemName: '',
			quantityValid: false,
			itemNameValid: false,
			disableSubmitButton: true
		})

		event.preventDefault();
		this.props.onClose();
		
		var subPrice = 0;
		
		for(let i = 0; i < inventory.length; i++){
			if(event.target.ItemName.value.toLowerCase() == inventory[i].name){
				subPrice = Number(event.target.Quantity.value) * Number(inventory[i].price);
			}
		}
		
		var totalTax = subPrice * 0.05;
		
		addItem({'name': event.target.ItemName.value.charAt(0).toUpperCase() + event.target.ItemName.value.slice(1).toLowerCase(), 'quantity': Number(event.target.Quantity.value), 'cost': subPrice, 'totalTax': totalTax}, "none");
		
		updateTotal(Total + subPrice + totalTax);
		updateSubTotal(SubTotal + subPrice);
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
			Quantity: '',
			ItemName: '',
			quantityValid: false,
			itemNameValid: false,
			disableSubmitButton: true
		})

		this.props.onClose();
	}

	checkValidation = e => {
		const {Quantity, ItemName, quantityValid, itemNameValid, disableSubmitButton} = this.state

		var itemForm = document.forms.iform;
		
		var formData = new FormData(itemForm);
		
		var quantity = formData.get("Quantity");
		
		var itemName= formData.get("ItemName");

		let itemFound = false;

		let item = '';

		for(let i = 0; i < inventory.length; i++){
			if(itemName.toLowerCase() == inventory[i].name){
				itemFound =  true
				item = inventory[i];
			}
		}

		if(Number(quantity) > 0 && Number(quantity) != null && Number(itemName) != null && itemFound && item.qty >= Number(quantity)){
			
			let priceDiv = document.getElementById("IndividualPrice");
		
			calculated = Number(quantity) * Number(item.price);

			priceDiv.innerText = calculated.toFixed(2);

			this.setState({
				disableSubmitButton: false
			})
		}
		else {
			this.setState({
				disableSubmitButton: true
			})
		}
	}
	
    render(){
		const {Quantity,ItemName,quantityValid,itemNameValid,disableSubmitButton} = this.state

        let dialog = (
            <div className="overlay">
                <form onSubmit={this.AddItem} id="iform">
					<div className="GasDialog">
						
						<div className="AddGas_Div">ADD ITEM MANUALLY</div>

							<div className="Initial_Div">
								<label for="Quantity">Quantity: </label>
								<input value={Quantity} type="number" min="0" id="Quantity" name="Quantity" placeholder="Eg. 60" onChange={this.handleChange} autoComplete="off"/>
							</div>

							<div className="Final_Div">
								<label for="ItemName">Item Name: </label>
								<input value={ItemName} type="text" id="ItemName" name="ItemName" placeholder="Eg. 2L Soda" onChange={this.handleChange} autoComplete="off"/>
							</div>
								
							<div className="Calculated_Div">	
								<div>Calculated Price: $</div>
								<div id="IndividualPrice" className="IndividualPrice"></div>
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

export default DisplayAddItemManually;