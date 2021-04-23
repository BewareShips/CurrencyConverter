import React from "react";
import "../styles/itemExchange.scss";

const ItemExchange = () => {
   return (
      <div className="container">
         <div className="currency">
            <select name="" id="input_currency">
               <option value="AED">AED</option>
               <option value="ARS">ARS</option>
            </select>
            <input  name="" id="input_amount" value="1"></input>
         </div>
         <button id="exchange">↕</button>
         <div className="currency">
            <select name="" id="output_currency">
               <option value="AED">AED</option>
            </select>
            <input  name="" id="output_amount" placeholder="0" />
         </div>
         <div className="result">
            <div className="rate" id="rate"></div>
         </div>
      </div>
   );
};

export default ItemExchange;
