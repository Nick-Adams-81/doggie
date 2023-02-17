import React, { useState } from "react";
import ItemRow from "./ItemRow";

export default function Challenge() {
  const [lowStock, setLowStock] = useState({
    data: "",
    loading: true,
  });
  const [restockCost, setRestockCost] = useState([]);

  const handleClickLowStock = async () => {
    const data = await fetch("http://localhost:4567/low-stock");
    const lowStock = await data.json();
    setLowStock({
      data: lowStock,
      loading: false,
    });
  };

  const handleClickReorderCost = async () => {
    const data = await fetch("http://localhost:4567/restock-cost", {
      method: "post",
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(lowStock.data),
    });
    const lowStockData = await data.json()
    setRestockCost(lowStockData);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td data-testid="sku-text">SKU</td>
            <td>Item Name</td>
            <td>Amount in Stock</td>
            <td>Capacity</td>
            <td>Order Amount</td>
          </tr>
        </thead>
        <tbody>
          {lowStock.loading
            ? ""
            : lowStock.data.map((item) => (
                <ItemRow
                  key={item.id}
                  item={item}
                  lowStock={lowStock}
                  setLowStock={setLowStock}
                />
              ))}
        </tbody>
      </table>
      <div id="totalCost">
        Total Cost: ${Math.round((restockCost + Number.EPSILON) * 100) / 100}
      </div>
      <button id="low-stock-button" onClick={handleClickLowStock}>
        Get Low-Stock Items
      </button>
      <button id="re-order-button" onClick={handleClickReorderCost}>
        Determine Re-Order Cost
      </button>
    </>
  );
}
