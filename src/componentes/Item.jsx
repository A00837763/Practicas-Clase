import React from "react";

export default function Item({ item }) {
  return (
    <div>
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
      </ul>
    </div>
  );
}
