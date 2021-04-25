import React, {useState} from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "../styles/itemExchange.scss";
import CurrencyRow from "./CurrencyRow";

const ItemExchange = () => {
   const { curItems } = useTypedSelector((state) => state.items);
   const [fromCurrency,setFromCurrency] = useState<string>("")
   const [toCurrency,setToCurrency] = useState<string>("")
   const [amount,setAmount] = useState()
   const [amount2,setAmount2] = useState()
   const onChangeFromCurrency = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setFromCurrency(e.target.value)
   }

   const onChangeToCurrency = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setToCurrency(e.target.value)
   }

  

   console.log(amount)
   console.log(amount2)

   const onAmountValue = (e:any)=>{
       setAmount(e.target.value)
       const convertCurrencyInValue = curItems.filter(item => item === e.target.value)
       const convertCurrencyToValue = curItems.filter(item => item === amount2)
       console.log(convertCurrencyInValue, 'convertCurrencyInValue')
   }
      // setAmount(e.target.value)
      
   

   return (
      <div className="container">
         <div className="currency">
            <CurrencyRow currencyOptions={curItems} selectedCurrency={fromCurrency} onChangeCurrency={onChangeFromCurrency} amount={amount} setAmount={(e)=>setAmount(e.target.value)}/>
         </div>
         <button id="exchange">↕</button>
         <div className="currency">
            <CurrencyRow currencyOptions={curItems} selectedCurrency={toCurrency} onChangeCurrency={onChangeToCurrency} amount={amount2} setAmount={(e)=>setAmount2(e.target.value)}/>
         </div>
         <div className="result">
            <div className="rate" id="rate"></div>
         </div>
      </div>
   );
};

export default ItemExchange;
