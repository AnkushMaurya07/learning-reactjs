import React, { useId } from "react";
function InputBox({
  //to display where we are passing from/to
  label,
  //to display amount
  amount,
  //whoever calls the component, state is also changed which we will use using useState(method)
  onAmountChange,
  //variable value
  onCurrencyChange,
  //pass in array/default empty array(so that app doesn't crash if the user doesn't use properly)
  currencyOptions = [],
  //to select different kind of currencies
  selectCurrency = "usd",
  //user can chamge this
  amountDisable = false,
  //user can change this setting
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        ></select>

        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </div>
    </div>
  );
}

export default InputBox;
