import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          `https://api.freecurrencyapi.com/v1/latest?apikey=TLaZr5ZnQfKcj0gHDvTgkHeOmNpuEtnsEFwnnDn7&base_currency=${baseCurrency}`
        );
        setRates(response.data.rates);
      } catch (error) {
        console.log('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const handleCurrencyChange = (event) => {
    if (event.target.name === 'baseCurrency') {
      setBaseCurrency(event.target.value);
    } else if (event.target.name === 'targetCurrency') {
      setTargetCurrency(event.target.value);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const convertCurrency = () => {
    const rate = rates[targetCurrency];
    const converted = amount * rate;
    setConvertedAmount(converted);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full flex flex-col items-center'>
        <label className='text-[#3c2572] text-center'>Base Currency:</label>
        <select className='text-[#3c2572] text-center' name="baseCurrency" value={baseCurrency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className='w-full flex flex-col items-center'>
        <label className='text-[#3c2572] text-center'>Target Currency:</label>
        <select className='text-[#3c2572] text-center' name="targetCurrency" value={targetCurrency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className='w-full flex flex-col items-center'>
        <label className='text-[#3c2572] text-center'>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div className='w-full flex flex-col items-center'>
        <button className='text-[#3c2572]' onClick={convertCurrency}>Convert</button>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h3 className='text-[#3c2572] text-center'>Converted Amount: {convertedAmount}</h3>
      </div>
    </div>
  );
};

export default CurrencyConverter;
