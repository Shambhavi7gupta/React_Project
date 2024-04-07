import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const CryptoPrices = () => {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setPrices(response.data.bpi);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="crypto-container">
      <h2 id="header">Cryptocurrency Prices</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="crypto-cards">
          {Object.entries(prices).map(([currency, data]) => (
            <div className="crypto-card" key={currency}>
              <h3>{currency}</h3>
              <p>{data.rate}</p>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptoPrices;
