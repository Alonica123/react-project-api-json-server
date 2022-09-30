import React from "react";
import { useState, useEffect } from "react";

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sales")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((sales) => {
          return (
            <>
              <div className="card m-4 p-1 bg-info text-white">
                <p className="card-text">id: {sales.id}</p>
                <h5 className="card-title">amount: {sales.amount}</h5>
                <h5 className="card-title">store name: {sales.store_name}</h5>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Customer;
