import './currencyInput.css'
import axios from "axios";
import React, {useEffect, useState} from "react";

function CurrentExchangeRates() {
  const amount1 = 1;
  const amount3 = 1;
  const currency1 = 'USD';
  const [currency2, setCurrency2] = useState('RUB');
  const currency3 = 'EUR';
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=b277716e82ee0f04f21715d66758e481')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);

  function format(num) {
    return num.toFixed(2);
  }

  function onCurrencyChange(currency2) {
    setCurrency2(currency2)
  }

  return (
    <div>
      <h1>Current exchange rates</h1>
      <div className="currently">
        <select onChange={ev => onCurrencyChange(ev.target.value)}>
          {Object.keys(rates).map((currency, id) => (
            <option key={id} value={currency}>{currency}</option>
          ))}
        </select>
        <div>1 USD = {format(amount1 * rates[currency2] / rates[currency1])} {currency2}</div>
        <div>1 EUR = {format(amount3 * rates[currency2] / rates[currency3])} {currency2}</div>
      </div>
    </div>
  );
}

export default CurrentExchangeRates;
