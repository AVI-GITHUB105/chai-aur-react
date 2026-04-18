import React from 'react'
import { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyoptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}//props in {}
) {
   const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>  {/* class in ``o pass classname propss ${className} if user want to addsome other css */}
      <div className="w-1/2">
        <label htmlFor={amountInputId}  className="text-black mb-2 inline-block">
          {label} 
        </label>
        <input

          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable} 
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}//
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => { onCurrencyChange && onCurrencyChange((e.target.value)) }}
          disabled={currencyDisable}
        >

          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;