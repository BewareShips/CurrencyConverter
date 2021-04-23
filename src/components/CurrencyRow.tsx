import React from 'react'

export interface CurOptions {
  currencyOptions: any[]
}

const CurrencyRow = ({currencyOptions}:CurOptions) => {
  
  return (
    <div>
      
      <select  >
        {currencyOptions.map(option => (
          <option key={option.ID} value={option.CharCode}>{option.CharCode} {option.Name}</option>
        ))}
      </select>
      <input  className="input"  />
    </div>
  )
}

export default CurrencyRow
