import React, {Component ,useRef} from 'react';
import {updateChange, Total, setTime2, remTime2, clearCheckout} from './Variables.js';

var calculated = 0;

function keyPressFunction(event){
	if(event.key == 'm'){
		let amount = document.getElementById("CombinedAmount");
		amount.remove();
		
		let waiting = document.getElementById("Combined_Terminal_Div");
		waiting.innerText = "Scanning Complete!";
		waiting.style.paddingTop = "45%";
		
		let cardButton = document.getElementById("Combined_Card_Button");
		cardButton.disabled = true;
		cardButton.style.background = "#808080";
		
		let cashButton = document.getElementById("Combined_Cash_Button");
		cashButton.disabled = true;
		cashButton.style.background = "#808080";
		
		let cancelButton = document.getElementById("Cancel");
		cancelButton.disabled = true;
		cancelButton.style.background = "#808080";
		
		let printButton = document.getElementById("Combined_Print_Receipt");
		printButton.disabled = false;
		printButton.style.background = "#00b4ff";
		
		let noButton = document.getElementById("Combined_No_Receipt");
		noButton.disabled = false;
		noButton.style.background = "#00b4ff";
	}
}

class Combined extends Component{
	updatePayment(){
		let newButton = document.getElementById("Complete");
		newButton.disabled = true;
		newButton.style.background = "#808080";
		
		let printButton = document.getElementById("Combined_Print_Receipt");
		printButton.disabled = true;
		printButton.style.background = "#808080";
		
		let noButton = document.getElementById("Combined_No_Receipt");
		noButton.disabled = true;
		noButton.style.background = "#808080";
		
		remTime2();
		
		let column3 = document.getElementById("TotalCost");
		
		let newColumn3 = document.getElementById("CombinedTotalCost");
		
		newColumn3.innerText = column3.innerText;

		let column = document.getElementById("SubTotalCost");
		
		let newColumn = document.getElementById("CombinedSubTotalCost");
		
		newColumn.innerText = column.innerText;

		let column2 = document.getElementById("TaxesCost");
		
		let newColumn2 = document.getElementById("CombinedTaxesCost");
		
		newColumn2.innerText = column2.innerText;

		
		let table = document.getElementById("Checkout");
		
		for(let i = 1; i < table.rows.length; i++){

			let row = table.rows[i];
			
			let c1 = row.cells[0];
			let c2 = row.cells[1];
			let c3 = row.cells[2];
			
			let newTable = document.getElementById("CombinedCheckout");

			let newRow = document.createElement("tr");
		
			let d1 = document.createElement("td");
			let d2 = document.createElement("td");
			let d3 = document.createElement("td");
			
			d1.innerHTML = c1.innerHTML;
			d2.innerHTML = c2.innerHTML;
			d3.innerHTML = c3.innerHTML;

			d1.style.paddingLeft = "10px";
			
			newRow.appendChild(d1);
			newRow.appendChild(d2);
			newRow.appendChild(d3);
			newTable.appendChild(newRow);
		}
	}
	
	updateCash(){
		var cashButton = document.getElementById("Combined_Cash_Button");
		document.getElementById("Combined_Card_Button").style.border = "none";
		cashButton.style.border = "2px yellow solid";
		cashButton.disabled = true;
		document.getElementById("Combined_Card_Button").disabled = false;

		var c1 = document.getElementById("CombinedAmount");
		var c2 = document.getElementById("Combined_Terminal_Div");
		

		if(c1 != null){
			c1.remove();
			c2.remove();
			window.removeEventListener('keypress', keyPressFunction, true);
		}
		
		// let overall = document.getElementById("Combined");

		let cformDiv = document.getElementById("cformDiv");
		
		let total = document.getElementById("CombinedTotalCost");
		
		let form = document.createElement("form");
		form.id = "cform";
		
		let d1 = document.createElement("div");
		d1.className = "CombinedAmount";
		d1.innerText = total.innerText + " due";

		let inputLabel = document.createElement("label");
		inputLabel.innerText = "Cash Received";

		let inputDiv = document.createElement("div");
		
		let d2 = document.createElement("label");
		d2.for = "Cash";
		d2.innerText = "$";
		
		let d3 = document.createElement("input");
		d3.type = "number";
		d3.min = "0.01";
		d3.step = "0.01";
		d3.id = "Cash";
		d3.name = "Cash";
		d3.autocomplete = "off";
		d3.addEventListener('input', function (evt){
			var calculated = 0;
			var changeForm = document.forms.cform;
			
			var formData = new FormData(changeForm);
			
			var cash = formData.get("Cash");
			
			if(Number(cash) == 0 || Number(cash) == null || Number(cash) < Total){
				calculated = 0;
				
				let changeDiv = document.getElementById("Change");
			
				changeDiv.innerText = calculated.toFixed(2);
				
				let printButton = document.getElementById("Combined_Print_Receipt");
				printButton.disabled = true;
				printButton.style.borderStyle = "none";
				printButton.style.background = "#808080";
				
				let noButton = document.getElementById("Combined_No_Receipt");
				noButton.disabled = true;
				noButton.style.borderStyle = "none";
				noButton.style.background = "#808080";
				
				return;
			}
			
			calculated = cash - Total;
			
			if(calculated > 0){
				let changeDiv = document.getElementById("Change");
				
				changeDiv.innerText = calculated.toFixed(2);
				
				let printButton = document.getElementById("Combined_Print_Receipt");
				printButton.disabled = false;
				printButton.style.background = "#00b4ff";
				
				let noButton = document.getElementById("Combined_No_Receipt");
				noButton.disabled = false;
				noButton.style.background = "#00b4ff";
			}
		});
		
		let d4 = document.createElement("div");
		d4.className = "Combined_Cash_Received";
		
		d4.appendChild(inputLabel);
		inputDiv.appendChild(d2);
		inputDiv.appendChild(d3);
		d4.appendChild(inputDiv);
		
		let d5 = document.createElement("div");
		d5.className = "Combined_Change_Div";
		
		let d6 = document.createElement("div");
		d6.innerText = "Change Due: $";
		
		let d7 = document.createElement("div");
		d7.id = "Change";
		d7.className = "Combined_Change";
		
		d5.appendChild(d6);
		d5.appendChild(d7);
		
		form.appendChild(d1);
		form.appendChild(d4);
		form.appendChild(d5);
		
		cformDiv.appendChild(form);
	}
	
	updateCard(){
		document.getElementById("Combined_Cash_Button").style.border = "none";
		document.getElementById("Combined_Cash_Button").disabled = false;
		document.getElementById("Combined_Card_Button").disabled = true; 
		document.getElementById("Combined_Card_Button").style.border = "2px yellow solid";
		
		let newButton = document.getElementById("Complete");
		newButton.disabled = true;
		newButton.style.background = "#808080";
		
		let printButton = document.getElementById("Combined_Print_Receipt");
		printButton.disabled = true;
		printButton.style.background = "#808080";
		printButton.style.border = "none";
		
		let noButton = document.getElementById("Combined_No_Receipt");
		noButton.disabled = true;
		noButton.style.background = "#808080";
		noButton.style.border = "none";
		
		var form = document.getElementById("cform");
		if(form != null){
			form.remove();
		}
		
		let overall = document.getElementById("Combined");

		let cformDiv = document.getElementById("cformDiv");
		
		let total = document.getElementById("CombinedTotalCost");
		
		let d2 = document.createElement("div");
		d2.className = "CombinedAmount";
		d2.id = "CombinedAmount";
		d2.innerText = total.innerText + " due";
		
		let d3 = document.createElement("div");
		d3.className = "Combined_Terminal_Div";
		d3.id = "Combined_Terminal_Div";
		d3.innerText = "Waiting for Debit/Credit Card Terminal";
		d3.tabindex = -1;
		window.addEventListener('keypress', keyPressFunction,true);
		
		cformDiv.appendChild(d2);
		cformDiv.appendChild(d3);
	}
	
	updateReceipt(a){
		let completeButton = document.getElementById("Complete");
		completeButton.disabled = false;
		completeButton.style.background = "#00b4ff";
		
		if(a == "Combined_No_Receipt"){
			document.getElementById("Combined_Print_Receipt").style.border = "none";
			document.getElementById("Combined_No_Receipt").style.border = "3px solid yellow";
		}
		
		if(a == "Combined_Print_Receipt"){
			document.getElementById("Combined_No_Receipt").style.border = "none";
			document.getElementById("Combined_Print_Receipt").style.border = "3px solid yellow";
		}
	}
	
	fixCheckout(){
		let table = document.getElementById("Checkout");
		let len = table.rows.length;
		
		for(let i = 1; i < len; i++){
			let row = table.rows[1];
			row.remove();
		}
		
		document.getElementById("SubTotalCost").innerText = "$0.00";
		document.getElementById("TotalCost").innerText = "$0.00";
		document.getElementById("TaxesCost").innerText = "$0.00";
	}
	
	render(){
		let dialog = (
			<div className="overlay">

				<div className="Combined" id="Combined">

					<div className="AddGas_Div">PAYMENT</div>
					
					<div className="Combined_Middle_Div">

						<div className="CombinedCheckoutDiv">
							<div className="Combined_Title" id="Combined_Title">Transaction Details</div>
							<div className="TableDiv">
								<div className="CombinedCheckoutTable">
									<table id="CombinedCheckout" className="CombinedCheckout">
										<thead>
											<tr className='HeaderRow'>
												<th className="CombinedQuantity">Quantity</th>
												<th className="CombinedItem">Item</th>
												<th className="CombinedCost">Cost</th>
											</tr>
										</thead>
									</table>
								</div>
								
								<div className="CombinedTotalTable">
									
									<div className="CombinedSubTotalLabel">Subtotal</div>
									<div id="CombinedSubTotalCost" className="CombinedSubTotalCost">$0.00</div>
								
									<div className="CombinedTaxesLabel">Taxes</div>
									<div id="CombinedTaxesCost" className="CombinedTaxesCost">$0.00</div>

									<div className="CombinedTotalLabel">Total</div>
									<div id="CombinedTotalCost" className="CombinedTotalCost">$0.00</div>
								</div>
							</div>
						</div>

						<div className="Combined_Side_Buttons" id="Combined_Side_Buttons">
							<div className="Combined_Payment_Buttons">
								<button id="Combined_Cash_Button" className="Combined_Cash_Button" onClick={this.updateCash}>Cash</button>
								<button id="Combined_Card_Button" className="Combined_Card_Button" onClick={this.updateCard}>Debit/Credit Card</button>
							</div>
							
							<div id="cformDiv" className="cformDiv"></div>

							<div className="Combined_Receipt_Options">
								<button id="Combined_Print_Receipt" className="Combined_Print_Receipt" onClick={() => {this.updateReceipt("Combined_Print_Receipt");}}>Print Receipt</button>
								<button id="Combined_No_Receipt" className="Combined_No_Receipt" onClick={() => {this.updateReceipt("Combined_No_Receipt");}}>No Receipt</button>
							</div>
						</div>
					</div>

					<div className="Combined_Buttons">
						<button className="Complete" id="Complete" onClick={() => {this.props.onClose(); this.fixCheckout(); clearCheckout(); document.getElementById("Combined_Cash_Button").disabled = false;}}>Complete</button>
						<button id="Cancel" className="Cancel" onClick={() => {this.props.onClose(); window.removeEventListener('keypress', keyPressFunction, true); document.getElementById("Combined_Cash_Button").disabled = false}}>Back</button>
					</div>
					
				</div>
				
			</div>
			
		);
		
		if(!this.props.isOpen){
			dialog = null;
		}
		
		else{
			setTime2(setTimeout(() => {
				this.updatePayment();
			}, 0));
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default Combined;