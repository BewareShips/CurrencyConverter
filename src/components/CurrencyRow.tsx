import events from "events";
import React from "react";

export interface CurOptions {
   currencyOptions: any[];
   selectedCurrency: string ;
   onChangeCurrency:(e:any)=>void;
   amount?: any;
   setAmount?:(e:any)=>void;
}

const CurrencyRow = ({ currencyOptions, selectedCurrency , onChangeCurrency,amount,setAmount}: CurOptions) => {
   return (
      <div>
         <select value={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map((option) => (
               <option key={option.ID} value={option.CharCode}>
                  {option.CharCode} {option.Name}
               </option>
            ))}
         </select>
         <input value={amount} onChange={setAmount} className="input" />
      </div>
   );
};

export default CurrencyRow;
