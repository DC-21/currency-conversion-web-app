import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/5aa8c673225b4453d64db3b8/latest/${baseCurrency}`
        );
        setRates(response.data.conversion_rates);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching exchange rates:", error);
        setIsLoading(false);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const handleCurrencyChange = (event) => {
    if (event.target.name === "baseCurrency") {
      setBaseCurrency(event.target.value);
    } else if (event.target.name === "targetCurrency") {
      setTargetCurrency(event.target.value);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const convertCurrency = () => {
    if (isLoading || !rates || Object.keys(rates).length === 0) {
      console.log("Exchange rates not available yet.");
      return;
    }

    const rate = rates[targetCurrency];
    const converted = amount * rate;
    setConvertedAmount(converted);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[300px] flex items-center justify-center">
        <label className="w-1/2 text-[#3c2572]">Base Currency:</label>
        <select
          className="w-1/2 text-[#3c2572]"
          name="baseCurrency"
          value={baseCurrency}
          onChange={handleCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className="w-[300px] flex items-center justify-center pt-6">
        <label className="w-1/2 text-[#3c2572]">Target Currency:</label>
        <select
          className="w-1/2 text-[#3c2572]"
          name="targetCurrency"
          value={targetCurrency}
          onChange={handleCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className="w-[300px] flex items-center justify-center pt-4">
        <label className="w-1/2 text-[#3c2572]">Amount:</label>
        <input
          className="w-1/2 text-left"
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="w-full flex flex-col items-center pt-8">
        <button
          className="py-2 w-20 text-center rounded bg-[#fe8267] text-white"
          onClick={convertCurrency}
        >
          Convert
        </button>
      </div>
      <div className="w-full flex flex-col items-center pt-4">
        <h3 className="text-[#3c2572]">Converted Amount: {convertedAmount}</h3>
      </div>
    </div>
  );
};

export default CurrencyConverter;
