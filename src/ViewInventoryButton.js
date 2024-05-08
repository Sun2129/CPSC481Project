import React, {Component} from 'react';
import {removeTime, setTimeID} from './Variables.js';

const InventoryButton= ({ label, onClick }) => {
  return (
    <button className="Inventory Button" onClick={onClick}>
      {label}
    </button>
  );
};

export default InventoryButton;