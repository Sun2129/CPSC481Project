var Checkout = [];
var checkoutPumps = [];
var Total = 0;
var SubTotal = 0;
var Taxes = 0;

// Fuel Inventory
var Octane87 = 36000;
var Octane89 = 18000;
var Octane93 = 29000;
var Diesel = 30000;
var Propane = 6000;

var Octane87_P = 0;
var Octane89_P = 0;
var Octane93_P = 0;
var Diesel_P = 0;
var Propane_P = 0;

var Octane87_O = 0;
var Octane89_O = 0;
var Octane93_O = 0;
var Diesel_O = 0;
var Propane_O = 0;

var Pump_1 = "Available";
var Pump_2 = "Available";
var Pump_3 = "In Use";
var Pump_4 = "Available";
var Pump_5 = "Out of Order";
var Pump_6 = "Available";
var Pump_1_color = "green";
var Pump_2_color = "green";
var Pump_3_color = "yellow";
var Pump_4_color = "green";
var Pump_5_color = "red";
var Pump_6_color = "green";
var showDiscountDialog = true;
var showCardDialog = true;
var showCashDialog = true;
var showReceiptOptions = true;
var time = [];
var time2 = [];
var time3 = [];
var inv_P = [{'name': 'cheetos', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'doritos', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'pringles', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'lays', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'fritos', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'miss vickies', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'ruffles', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'sun chips', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'takis', 'category': 'chips', 'qty': 0, 'price': 0},
{'name': 'coffee', 'category': 'drinks', 'qty': 0, 'price': 0},
{'name': 'tea', 'category': 'drinks', 'qty': 0, 'price': 0},
{'name': '2l soda', 'category': 'drinks', 'qty': 0, 'price': 0},
{'name': 'milk', 'category': 'drinks', 'qty': 0, 'price': 0},
{'name': 'water', 'category': 'drinks', 'qty': 0, 'price': 0},
{'name': 'oreo', 'category': 'cookies', 'qty': 0, 'price': 0},
{'name': 'chips ahoy', 'category': 'cookies', 'qty': 0, 'price': 0},
{'name': 'dads', 'category': 'cookies', 'qty': 0, 'price': 0},
{'name': 'walkers', 'category': 'cookies', 'qty': 0, 'price': 0},
{'name': 'made good', 'category': 'cookies', 'qty': 0, 'price': 0},
{'name': 'nerds', 'category': 'candy', 'qty': 0, 'price': 0},
{'name': 'skittles', 'category': 'candy', 'qty': 0, 'price': 0},
{'name': 'coffee crisp', 'category': 'candy', 'qty': 0, 'price': 0},
{'name': 'starburst', 'category': 'candy', 'qty': 0, 'price': 0},
{'name': 'gushers', 'category': 'candy', 'qty': 0, 'price': 0},
{'name': 'smarties', 'category': 'candy', 'qty': 0, 'price': 0},
{'name': 'lottery ticket', 'category': 'misc', 'qty': 0, 'price': 0},
{'name': 'cigarettes', 'category': 'misc', 'qty': 0, 'price': 0},
{'name': 'batteries', 'category': 'misc', 'qty': 0, 'price': 0},
{'name': 'advil', 'category': 'misc', 'qty': 0, 'price': 0}];

var categories = ['chips', 'drinks', 'cookies', 'candy','misc'];


var inventory = [{'name': 'cheetos', 'price': 4.00, 'category': 'chips', 'qty': 50, 'capacity': 100, 'img': 'cheetos.png'}, 
	{'name': 'doritos', 'price': 2.80, 'category': 'chips', 'qty': 60, 'capacity': 100, 'img': 'doritos.png'},
	{'name': 'pringles', 'price': 5.99, 'category': 'chips', 'qty': 43, 'capacity': 100, 'img': 'pringles.png'},
	{'name': 'lays', 'price': 2.80, 'category': 'chips', 'qty': 60, 'capacity': 100, 'img': 'lays.png'},
	{'name': 'fritos', 'price': 3.00, 'category': 'chips', 'qty': 72, 'capacity': 100, 'img': 'fritos.png'},
	{'name': 'miss vickies', 'price': 3.00, 'category': 'chips', 'qty': 72, 'capacity': 100, 'img': 'miss_vickies.png'},
	{'name': 'ruffles', 'price': 3.00, 'category': 'chips', 'qty': 72, 'capacity': 100, 'img': 'ruffles.png'},
	{'name': 'sun chips', 'price': 3.00, 'category': 'chips', 'qty': 72, 'capacity': 100, 'img': 'sun_chips.png'},
	{'name': 'takis', 'price': 3.00, 'category': 'chips', 'qty': 72, 'capacity': 100, 'img': 'takis.png'},

	{'name': 'coffee', 'price': 2.00, 'category': 'drinks', 'qty': 80, 'capacity': 150, 'img': 'coffee.png'},
	{'name': 'tea', 'price': 1.5, 'category': 'drinks', 'qty': 70, 'capacity': 150, 'img': 'tea.png'},
	{'name': '2l soda', 'price': 3.00, 'category': 'drinks', 'qty': 95, 'capacity': 150, 'img': '2l_soda.png'},
	{'name': 'milk', 'price': 1.5, 'category': 'drinks', 'qty': 35, 'capacity': 150, 'img': 'milk.png'},
	{'name': 'water', 'price': 1.0, 'category': 'drinks', 'qty': 80, 'capacity': 150, 'img': 'water.png'},

	{'name': 'oreo', 'price': 3.99, 'category': 'cookies', 'qty': 25, 'capacity': 75, 'img': 'oreo.png'},
	{'name': 'chips ahoy', 'price': 4.50, 'category': 'cookies', 'qty': 46, 'capacity': 75, 'img': 'chips_ahoy.png'},
	{'name': 'dads', 'price': 3.99, 'category': 'cookies', 'qty': 39, 'capacity': 75, 'img': 'dads.png'},
	{'name': 'walkers', 'price': 4.50, 'category': 'cookies', 'qty': 40, 'capacity': 75, 'img': 'walkers.png'},
	{'name': 'made good', 'price': 6.0, 'category': 'cookies', 'qty': 42, 'capacity': 75, 'img': 'made_good.png'},

	{'name': 'nerds', 'price': 2.00, 'category': 'candy', 'qty': 60, 'capacity': 100, 'img': 'nerds.png'},
	{'name': 'skittles', 'price': 2.00, 'category': 'candy', 'qty': 65, 'capacity': 100, 'img': 'skittles.png'},
	{'name': 'coffee crisp', 'price': 2.00, 'category': 'candy', 'qty': 50, 'capacity': 100, 'img': 'coffee_crisp.png'},
	{'name': 'starburst', 'price': 4.00, 'category': 'candy', 'qty': 47, 'capacity': 100, 'img': 'starburst.png'},
	{'name': 'gushers', 'price': 4.00, 'category': 'candy', 'qty': 32, 'capacity': 100, 'img': 'gushers.png'},
	{'name': 'smarties', 'price': 4.00, 'category': 'candy', 'qty': 36, 'capacity': 100, 'img': 'smarties.png'},

	{'name': 'lottery ticket', 'price': 5.00, 'category': 'misc', 'qty': 76, 'capacity': 100, 'img': 'lottery_ticket.png'},
	{'name': 'cigarettes', 'price': 15.00, 'category': 'misc', 'qty': 82, 'capacity': 100, 'img': 'cigarettes.png'},
	{'name': 'batteries', 'price': 7.00, 'category': 'misc', 'qty': 53, 'capacity': 100, 'img': 'batteries.png'},
	{'name': 'advil', 'price': 20.00, 'category': 'misc', 'qty': 50, 'capacity': 100, 'img': 'advil.png'}];

	
let promos = [{'name': '10% off all candy', 'type': 'category', 'item': 'none', 'category': 'Candy', 'num_items': 1, 'discount_type': 'percent', 'discount_off': 10, 'num_discount': 1, 'start': '2023-12-01', 'end': '2023-12-18'},
{'name': 'Buy any 2 chips, get 1 free', 'type': 'category', 'item': 'none', 'category': 'Chips', 'num_items': 3, 'discount_type': 'percent', 'discount_off': 100, 'num_discount': 1, 'start': '2023-12-01', 'end': '2023-12-20'},
{'name': 'Buy any drink, get 1 50% off', 'type': 'category', 'item': 'none', 'category': 'Drinks', 'num_items': 2, 'discount_type': 'percent', 'discount_off': 50, 'num_discount': 1, 'start': '2023-12-03', 'end': '2023-12-22'},
{'name': 'Car washes - $5 off', 'type': 'item', 'item': 'car wash', 'category': 'none', 'num_items': 1, 'discount_type': 'amount', 'discount_off': 5, 'num_discount': 1, 'start': '2023-12-12', 'end': '2023-12-28'}
]	

function overwritePromos(newPromos){
	promos = newPromos;
}
	
function setItem_P(itemName, a){
	const invPItem = inv_P.find(item => item.name === itemName);

	invPItem['qty'] = a;
}

function setItem_X(itemName, a){
	const invPItem = inv_P.find(item => item.name === itemName);

	invPItem['price'] = a;
}

function UpdateInventory(){
	inventory.forEach(item => {
		const correspondingInvPItem = inv_P.find(invItem => invItem.name === item.name);

		if (correspondingInvPItem['qty'] != 0) {
			item.qty = item.qty + correspondingInvPItem['qty'];

		  if (item.qty <= 0) {
			item.qty = 0;
		  } else if (item.qty > item.capacity) {
			item.qty = item.capacity;
		  }
		}

		correspondingInvPItem.qty = 0;
	  });
}

function UpdatePrices(){
	inventory.forEach(item => {
		const correspondingInvPItem = inv_P.find(invItem => invItem.name === item.name);

		if (correspondingInvPItem['price'] > 0) (
		item.price = correspondingInvPItem['price']
		)
		  correspondingInvPItem.price = 0;
	  });
}


var days_sales = {
    Cheetos: { 30: 20, 60: 40, 90: 60 },
	Doritos: { 30: 18, 60: 42, 90: 78 },
	Coffee: { 30: 47, 60: 120, 90: 240 },
	Tea: { 30: 62, 60: 111, 90: 256 },
	TwoLitreSoda: { 30: 30, 60: 78, 90: 153 },
    Milk: { 30: 26, 60: 54, 90: 170 },
	Oreo: { 30: 50, 60: 100, 90: 150 },
	ChipsAhoy: { 30: 42, 60: 103, 90: 182 },
	Nerds: { 30: 23, 60: 63, 90: 98 },
	Skittles: { 30: 25, 60: 53, 90: 102 },
	CoffeeCrisp: { 30: 36, 60: 72, 90: 130 },
	LotteryTicket: { 30: 20, 60: 62, 90: 133 },
	Cigarettes: { 30: 23, 60: 42, 90: 83 },
}

function setFuel_P(a,b,c,d,e){
 Octane87_P = a;
 Octane89_P = b;
 Octane93_P = c;
 Diesel_P = d;
 Propane_P = e;
}

function OrderFuel_O(a,b,c,d,e){
	Octane87_O = a;
	Octane89_O = b;
	Octane93_O = c;
	Diesel_O = d;
	Propane_O = e;
}

function UpdateFuel(Fuel, b){
// a is base (Octane87)
// p is remove or add (Octane87_P)

	Octane87 = Octane87 + Octane87_P;
	if(Octane87 <= 0){
		Octane87 = 0;
	}
	Octane87_P = 0;

	Octane89 = Octane89 + Octane87_P;
	Octane89_P = 0;
	if(Octane89 <= 0){
		Octane89 = 0;
	}


	Octane93 = Octane93 + Octane93_P;
	Octane93_P = 0;
	if(Octane93 <= 0){
		Octane93 = 0;
	}

	Diesel = Diesel + Diesel_P;
	Diesel_P = 0;
	if(Diesel <= 0){
		Diesel = 0;
	}

	Propane = Propane + Propane_P;
	Propane_P = 0;
	if(Propane <= 0){
		Propane = 0;
	}
}

function addItem(a, b){
	let check = false;
	
	if(b != "none"){
		for(let i = 0; i < checkoutPumps.length; i++){
			if(checkoutPumps[i] == b){
				check = true;
			}
		}
		if(check == false){
			checkoutPumps.push(b);
		}
	}
	
	for(let i = 0; i < Checkout.length; i++){
		if(Checkout[i].name == a.name){
			Checkout[i].quantity += Number(a.quantity);
			Checkout[i].cost += a.cost;
			Checkout[i].totalTax += a.totalTax;
			
			let table = document.getElementById("Checkout");
		
			let row = table.rows[i+1];
			
			let c1 = row.cells[0];
			let c2 = row.cells[2];
			
			c1.innerText = Checkout[i].quantity.toFixed(2);
			c2.innerText = "$" + Checkout[i].cost.toFixed(2);
			
			return;
		}
	}
	
	Checkout.push(a);
	
	let table = document.getElementById("Checkout");
	
	let row = document.createElement("tr");
	
	let c1 = document.createElement("td");
	let c2 = document.createElement("td");
	let c3 = document.createElement("td");
	
	c1.innerText = a.quantity.toFixed(2);
	c2.innerText = a.name;
	c3.innerText = "$" + a.cost.toFixed(2);

	c1.style.paddingLeft = "10px";
	
	row.appendChild(c1);
	row.appendChild(c2);
	row.appendChild(c3);
	
	let removeButton = document.createElement("button");
	removeButton.className = "removeButton";
	removeButton.innerText = 'X';
	removeButton.style.fontWeight = "bold";
	removeButton.style.color = "white";
	removeButton.style.backgroundColor = "#FF4F4B";
	removeButton.style.borderStyle = "none";
	removeButton.style.cursor = "pointer";
	removeButton.onclick = function(){
		let index = getIndex(a.name);
		table.deleteRow(index + 1);
		updateTotal(Total - (Checkout[index].cost + Checkout[index].totalTax)); 
		updateSubTotal(SubTotal - Checkout[index].cost); 
		updateTaxes(Taxes - Checkout[index].totalTax)
		removeItem(index);
	};
	
	row.append(removeButton);
	
	table.appendChild(row);
}

function clearCheckout(){
	for(let i = 0; i < checkoutPumps.length; i++){
		updatePump(checkoutPumps[i], "In Use", "yellow");
	}
	for(let i = 0; i < Checkout.length; i++){
		if(Checkout[i].name == "Regular"){
			Octane87 -= Checkout[i].quantity;
		}
		
		else if(Checkout[i].name == "Premium"){
			Octane89 -= Checkout[i].quantity;
		}
		
		else if(Checkout[i].name == "Nitro"){
			Octane93 -= Checkout[i].quantity;
		}
		
		else if(Checkout[i].name == "Diesel"){
			Diesel -= Checkout[i].quantity;
		}
		
		else if(Checkout[i].name == "Propane Refill"){
			Propane -= Checkout[i].quantity;
		}
	}
	
	for(let i = 0; i < Checkout.length; i++){
		for(let j = 0; j < inventory.length; j++){
			if(Checkout[i].name.toLowerCase() == inventory[j].name.toLowerCase()){
				inventory[j].qty -= Checkout[i].quantity;
			}
		}
	}
	
	checkoutPumps.splice(0, checkoutPumps.length);
	Checkout.splice(0, Checkout.length);
	Total = 0;
	SubTotal = 0;
	Taxes = 0;
}

function applyDiscount(a, b, c, d){
	if(a == 1){
		for(let i = 0; i < Checkout.length; i++){
			if(Checkout[i].name == d && Checkout[i].quantity >= b){
				updateTotal(Total - Checkout[i].cost);
				updateSubTotal(SubTotal - Checkout[i].cost);
				
				var pricePer = Checkout[i].cost/Checkout[i].quantity;
				var newSub = (Checkout[i].quantity - b) * pricePer + 10;
				Checkout[i].cost = newSub;
				
				let table = document.getElementById("Checkout");
		
				let row = table.rows[i+1];
				
				let c1 = row.cells[1];
				let c2 = row.cells[2];
				
				c1.innerHTML = c1.innerText + " " + '<span style="color: gray;font-style:italic">' + c + '</span>';
				
				c2.innerHTML = '<span style="text-decoration:line-through">' + c2.innerText + '</span>' + '<br>' + '<span style="color: red">' + "$" + newSub.toFixed(2) + '</span>';
				
				updateTotal(Total + newSub);
				updateSubTotal(SubTotal + newSub);
				
				return true;
			}
		}
	}
	
	if(a == 2){
		for(let i = 0; i < Checkout.length; i++){
			if(Checkout[i].name == d && Checkout[i].quantity > b){
				updateTotal(Total - Checkout[i].cost);
				updateSubTotal(SubTotal - Checkout[i].cost);
				
				var pricePer = Checkout[i].cost/Checkout[i].quantity;
				var newSub = Checkout[i].cost - pricePer;
				Checkout[i].cost = newSub;
				
				let table = document.getElementById("Checkout");
		
				let row = table.rows[i+1];
				
				let c1 = row.cells[1];
				let c2 = row.cells[2];
				
				c1.innerHTML = c1.innerText + " " + '<span style="color: gray;font-style:italic">' + c + '</span>';
				
				c2.innerHTML = '<span style="text-decoration:line-through">' + c2.innerText + '</span>' + '<br>' + '<span style="color: red">' + "$" + newSub.toFixed(2) + '</span>';
				
				updateTotal(Total + newSub);
				updateSubTotal(SubTotal + newSub);
				
				return true;
			}
		}
	}
	
	if(a == 5){
		addItem({'name': c, 'quantity': 1, 'cost': -(SubTotal * 0.10), 'totalTax': 0}, "none");
		updateTotal(Total - (SubTotal * 0.10));
		updateSubTotal(SubTotal - (SubTotal * 0.10));
	}
}

function removeItem(a){
	Checkout.splice(a, 1);
}

function getIndex(a){
	for(let i = 0; i < Checkout.length; i++){
		if(a == Checkout[i].name){
			return i;
		}
	}
}

function updatePump(pump, status, color){
	if (pump === "pump1"){
		Pump_1 = status;
		Pump_1_color = color;
	}
	else if (pump === "pump2"){
		Pump_2 = status;
		Pump_2_color = color;
	}
	else if (pump === "pump3"){
		Pump_3 = status;
		Pump_3_color = color;
	}
	else if (pump === "pump4"){
		Pump_4 = status;
		Pump_4_color = color;
	}
	else if (pump === "pump5"){
		Pump_5 = status;
		Pump_5_color = color;
	}
	else if (pump === "pump6"){
		Pump_6 = status;
		Pump_6_color = color;
	}
}

function updateTotal(a){
	Total = a;
	
	let table4 = document.getElementById("Total");
	
	let column3 = document.getElementById("TotalCost");
	
	column3.innerText = "$" + Math.abs(Total).toFixed(2);
}

function updateSubTotal(a){
	SubTotal = a;
	
	let table2 = document.getElementById("SubTotal");

	let column = document.getElementById("SubTotalCost");
	
	column.innerText = "$" + Math.abs(SubTotal).toFixed(2);
}

function updateTaxes(a){
	Taxes = a;
	
	let table3 = document.getElementById("Taxes");
	
	let column2 = document.getElementById("TaxesCost");
	
	column2.innerText = "$" + Math.abs(Taxes).toFixed(2);
}

function updateChange(){
	
}

function updateDiscountDialog(a){
	showDiscountDialog = a;
}

function updateCardDialog(a){
	showCardDialog = a;
}

function updateCashDialog(a){
	showCashDialog = a;
}

function updateReceiptDialog(a){
	showReceiptOptions = a;
}

function setTimeID(a){
	time.push(a);
}

function removeTime(){
	return time.pop();
}

function setTime2(a){
	time2.push(a);
}

function remTime2(){
	return time2.pop();
}

function setTime3(a){
	time3.push(a);
}

function remTime3(){
	return time3.pop();
}

function propaneInCheckout() {
	var table = document.getElementById("Checkout");
	
	var rows = table.rows;
	for (var i = 0; i < table.rows.length; i++) {
		var cols = rows[i].cells;
		
		for (let cell of cols) {
			if (cell.innerText == "Propane Refill") {
				return true;
			}
		}
	}
	return false;
}

export {
	Checkout,
	Total,
	SubTotal,
	Taxes,
	Octane87,
	Octane89,
	Octane93,
	Diesel,
 	Propane,
	Octane87_P,
	Octane89_P,
	Octane93_P,
	Diesel_P,
	Propane_P,
	Octane87_O,
 	Octane89_O,
 	Octane93_O,
 	Diesel_O,
 	Propane_O,
	Pump_1,
	Pump_2,
	Pump_3,
	Pump_4,
	Pump_5,
	Pump_6,
	Pump_1_color,
	Pump_2_color,
	Pump_3_color,
	Pump_4_color,
	Pump_5_color,
	Pump_6_color,
	time,
	time2,
	setFuel_P,
	OrderFuel_O,
	UpdateFuel,
	addItem,
	removeItem,
	getIndex,
	showDiscountDialog,
	showCardDialog,
	showCashDialog,
	showReceiptOptions,
	updateTotal,
	updateSubTotal,
	updateTaxes,
	updateDiscountDialog,
	updateCardDialog,
	updateCashDialog,
	updateReceiptDialog,
	setTimeID,
	removeTime,
	setTime2,
	remTime2,
	setTime3,
	remTime3,
	propaneInCheckout,
	inventory,
	updatePump,
	clearCheckout,
	applyDiscount,
	updateChange,
	UpdateInventory,
	UpdatePrices,
	days_sales,
	inv_P,
	categories,
	setItem_P,
	setItem_X,
	promos,
	overwritePromos
}
