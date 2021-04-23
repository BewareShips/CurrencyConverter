import React from "react";
import { Currency } from "../types/item";
import "../styles/item.scss";

const Item = ({ CharCode, Nominal, Value, Previous, Name }: Currency) => {
   return (
      <div className="itemContainer">
         <div className="itemName">{Name}</div>
         <div className="itemInfo">
            <div className="itemCurrency">
               <div>
                  {Nominal} {CharCode}
               </div>
               <button className="itemButton">↕</button>
               <div>{Value} RUB</div>
            </div>
            <div className="itemDif">{(1 - Value / Previous).toFixed(4)}</div>
         </div>
      </div>
   );
};

export default Item;
