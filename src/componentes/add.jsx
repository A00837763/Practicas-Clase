import React, { useState } from "react";
import Boton from "./Boton";
export default function Add() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name=""
        id=""
      ></input>
      {name}
      <Boton name="agregar"></Boton>
    </div>
  );
}
