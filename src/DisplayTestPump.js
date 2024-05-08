import React, {Component} from 'react';
import {Pump_1, Pump_2, Pump_3, Pump_4, Pump_5, Pump_6, updatePump, setTime3, remTime3} from "./Variables.js";

class DisplayTestPump extends Component{

    ChangeStatus = (event) => {
        event.preventDefault();
		this.props.onClose();

        var pump = event.target.Pump.value;
        updatePump(pump, "Testing...", "Yellow");
    };
	
	updateRadio(){
		remTime3()
		
		if(Pump_1 == "In Use" || Pump_1 == "Testing..."){
			document.getElementById("pump1").disabled = true;
			
			let label = document.getElementById("pump1label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump1").disabled = false;
			
			let label = document.getElementById("pump1label");
			label.style.color = "#000000";
		}
		
		if(Pump_2 == "In Use" || Pump_2 == "Testing..."){
			document.getElementById("pump2").disabled = true;
			
			let label = document.getElementById("pump2label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump2").disabled = false;
			
			let label = document.getElementById("pump2label");
			label.style.color = "#000000";
		}
		
		if(Pump_3 == "In Use" || Pump_3 == "Testing..."){
			document.getElementById("pump3").disabled = true;
			
			let label = document.getElementById("pump3label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump3").disabled = false;
			
			let label = document.getElementById("pump3label");
			label.style.color = "#000000";
		}
		
		if(Pump_4 == "In Use" || Pump_4 == "Testing..."){
			document.getElementById("pump4").disabled = true;
			
			let label = document.getElementById("pump4label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump4").disabled = false;
			
			let label = document.getElementById("pump4label");
			label.style.color = "#000000";
		}
		
		if(Pump_5 == "In Use" || Pump_5 == "Testing..."){
			document.getElementById("pump5").disabled = true;
			
			let label = document.getElementById("pump5label");
			label.style.color = "#808080";
		}
		
		else{
			document.getElementById("pump5").disabled = false;
			
			let label = document.getElementById("pump5label");
			label.style.color = "#000000";
		}
		
		if(Pump_6 == "In Use" || Pump_6 == "Testing..."){
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
	
	render(){
		let dialog = (
			<div className="overlay">
				<form onSubmit={this.ChangeStatus}>
					<div className="GasDialog">						
						<div className="AddGas_Div">TEST PUMP (OVERRIDE)</div>
						<div className="Pump_Div">
							<div className="Pump_label">Select Pump</div>
							<div className="Pump_Selection">

								<div className="pump1Div">
									<input type="radio" id="pump1" name="Pump" value="pump1" />
									<label id="pump1label" for="pump1">Pump 1 ({Pump_1})</label>
								</div>
								
								<div className="pump2Div">
									<input type="radio" id="pump2" name="Pump" value="pump2" />
									<label id="pump2label" for="pump2">Pump 2 ({Pump_2})</label>
								</div>
								
								<div className="pump3Div"> 
									<input type="radio" id="pump3" name="Pump" value="pump3" />
									<label id="pump3label" for="pump3">Pump 3 ({Pump_3})</label>
								</div>
								
								<div className="pump4Div">
									<input type="radio" id="pump4" name="Pump" value="pump4" />
									<label id="pump4label" for="pump4">Pump 4 ({Pump_4})</label>
								</div>
								
								<div className="pump5Div">
									<input type="radio" id="pump5" name="Pump" value="pump5" />
									<label id="pump5label" for="pump5">Pump 5 ({Pump_5})</label>
								</div>
								
								<div className="pump6Div">
									<input type="radio" id="pump6" name="Pump" value="pump6" />
									<label id="pump6label" for="pump6">Pump 6 ({Pump_6})</label>
								</div>
							</div>
						</div>

						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Submit</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
					</div>
				</form>
			</div>
		);
		
		if(! this.props.isOpen){
			dialog = null;
		}
		
		else{
			setTime3(setTimeout(() => {
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

export default DisplayTestPump;