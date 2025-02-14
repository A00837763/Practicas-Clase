import React, { useState } from "react";
import Boton from "./Boton";

export default function Add({ add }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function onsubmit(e) {
    e.preventDefault();
    if (!name || !price) {
      alert("ingresa algo");
      return;
    }
    add({ name, price });
    setName("");
    setPrice("");
  }

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name=""
          id=""
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
          name=""
          id=""
        />
        <input type="submit" value={"add"} />
      </form>
    </div>
  );
}
