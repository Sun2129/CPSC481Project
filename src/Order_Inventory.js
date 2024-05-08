import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';
import {useState} from 'react';
import { inventory, categories, setItem_P, inv_P } from './Variables';
import Sidebars from './Sidebars';
import PopUp from './PopUpInvOrder';

function useItemStates(initialValue) {
    const [state, setState] = useState(initialValue);
  
    return { state, setState };
  }

const initializeItemStates = (inventory) => {
    const itemStates = {};
    inventory.forEach(item => {
        itemStates[`qty_${item.name.toLowerCase().replace(' ', '_')}`] = useItemStates(0);
    });
    return itemStates;
    };

function OrderInventory() {

    const [firstState, setFirstState] = useState(false);
    const itemStates = initializeItemStates(inventory);
    const [selectedCategory, setSelectedCategory] = useState(categories);

    const Refresh = () => {
        setFirstState(false);
        Object.entries(itemStates).forEach(([key, { setState }]) => {
            const itemName = key.replace(/^qty_/, '').replace(/_/g, ' ');
            setState(0);
            setItem_P(itemName, 0);
          });
        setSelectedCategory(categories);
        };
    
    const Final_Call = () => {
        setFirstState(true);
        Object.entries(itemStates).forEach(([key, { state }]) => {
            const itemName = key.replace(/^qty_/, '').replace(/_/g, ' ');
            setItem_P(itemName, state);
          });
        };
    
    // const addItem = (itemName) => {
    //     const varItemName = `qty_${itemName.replace(' ', '_')}`;
    //     const { state, setState } = itemStates[varItemName];
    //     setState(state + 1);
    //     setItem_P(itemName, state + 1);
    //     };
    
    // const decreaseItem = (itemName) => {
    //     const varItemName = `qty_${itemName.replace(' ', '_')}`;
    //     const { state, setState } = itemStates[varItemName];
    //     if (state > 0){
    //     setState(state - 1);
    //     setItem_P(itemName, state - 1);
    //     }
    //     };

    const handleChangeCategory = (event) => {
      if (event.target.value == "View All") {
        setSelectedCategory(categories);
      }
      else {
        setSelectedCategory([event.target.value]);
      }
    };

    const handleChangeItem = (itemName, inputText) => {
      const regex = new RegExp("^0+(?!$)",'g');
      const varItemName = `qty_${itemName.replace(' ', '_')}`;
      const { state, setState } = itemStates[varItemName];
  
      if((inputText.target.value.length) > 1){
        inputText.target.value = inputText.target.value.replaceAll(regex, "");
    }
    else{
        setState(0);
    }
  
      const ints = Number(inputText.target.value);
      const int = parseInt(ints);
  
      if(isNaN(int)){
          
          setState(state);
      }
      else if(int < 0){
        setState(state);
      }
      else{
          setState(int);
      }
  }; 

    return (
        <div className="Inventory_Page" style={{width:"100%", height:"100%", position:"absolute", overflowX:"hidden"}}>
          <Sidebars />
          <div className="corner">Order Inventory</div>
          {/* <div className='search'><input type="text" name="name" /></div> */}
		  
          <div className="Inv_Div">
			<select className="invDropdown" value={categories.every(item => selectedCategory.includes(item)) ? 'View All' : selectedCategory[0]} onChange={handleChangeCategory}>
			  <option value="View All">All Categories</option>
			  {categories.map(category => (
				<option key={category} value={category}>
				  {category.charAt(0).toUpperCase() + category.slice(1)}
				</option>
			  ))}
			</select>
      <br></br>
			{selectedCategory.map(category => (
			  <React.Fragment key={category}>
				<div className="invHeader"> 
				  <h1 style={{color:"white"}}>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
				</div>
        <div className="cards" style={{width:"100%"}}>
				{inventory.filter(item => item.category === category).map(item => (
				  <div class="inv_card" key={item.name}>
					<img src={item.img} alt="Avatar" style={{width: "100%"}}></img>
					<div class="cardcontainer">
						<h4><b>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</b></h4>
						<p>{item.qty}</p>
						<input className="invText" type="number" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`qty_${item.name.replace(' ', '_')}`].state} />
					</div>
				  </div>
				))}
        </div>
			  </React.Fragment>
			))}
		  </div>
    
		  <div className="InventoryGroup">
				<button className='dashboard-button' onClick={Final_Call} style={{border:'2px solid black'}}>Review and Submit</button>
		  </div>
      {firstState && (
        <PopUp isOpen={firstState} onClose={Refresh}></PopUp>
      )} 
      
        </div>
    
      );
    }
    
    
    export default OrderInventory;