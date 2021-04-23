import React, {useState} from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "../styles/itemExchange.scss";
import CurrencyRow from "./CurrencyRow";

const ItemExchange = () => {
   const { curItems } = useTypedSelector((state) => state.items);
   const [fromCurrency,setFromCurrency] = useState()
   const [toCurrency,setToCurrency] = useState()
   return (
      <div className="container">
         <div className="currency">
            <CurrencyRow currencyOptions={curItems} />
         </div>
         <button id="exchange">↕</button>
         <div className="currency">
            <CurrencyRow currencyOptions={curItems} />
         </div>
         <div className="result">
            <div className="rate" id="rate"></div>
         </div>
      </div>
   );
};

export default ItemExchange;
