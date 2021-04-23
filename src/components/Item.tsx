import React from "react";
import { Currency } from "../types/item";

const Item = ({ CharCode, Nominal, Value, Previous, Name }: Currency) => {
   return (
   <div>
     <div>
       {Name}
     </div>
     <div>
       {Nominal} {CharCode}
     </div>
     <div>
       {Value} RUB
     </div>
     <div>
       {(1 - Value/Previous)}
     </div>
   </div>
   )
};

export default Item;
