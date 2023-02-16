import React from "react";

const ItemRow = ({ item, lowStock, setLowStock }) => {
  // create shallow copy
  let items = lowStock.data?.map((i) => ({ ...i }));

  const handleChange = (event) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name === item.name) {
        // reusing cost field to transport data
        let restockAmount = event.target.value;

        //? TODO: can add more robust form validation too
        if (restockAmount < 0) {
          restockAmount = 0;
        }
        restockAmount = Math.min(restockAmount, item.capacity - item.stock);

        items[i].cost = restockAmount;
      }
      setLowStock({ data: items, loading: lowStock.loading });
    }
  };

  return (
    <tr>
      <td id="item-id">{item.id}</td>
      <td id="item-name">{item.name}</td>
      <td id="item-stock">{item.stock}</td>
      <td id="item-capacity">{item.capacity}</td>
      <td id="order-ammount">
        <input type="number" value={item.cost} onChange={handleChange}></input>
      </td>
    </tr>
  );
};

export default ItemRow;
