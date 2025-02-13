import "./App.css";

import { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Boton from "./componentes/Boton";
import List from "./componentes/List";
import Add from "./componentes/add";

export default function App() {
  const items = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Headphones", price: 149.99 },
    { id: 3, name: "Mouse", price: 29.99 },
    { id: 4, name: "Keyboard", price: 79.99 },
  ];

  let [count, setCount] = useState(0);
  const sum = () => setCount(count + 1);
  const resta = () => setCount(count - 1);
  function add(item) {
    item.id = items.length + 1;
    items.push(item);
  }

  return (
    <div>
      <Header />
      {count}
      <div>
        <Boton style={{ background: "green" }} name={"suma"} click={sum} />
        <Boton name={"resta"} click={resta} />
        <Boton name={"mensaje"} click={() => alert("hola")} />
        <Add add={add} />
      </div>
      <div>
        <List items={items}></List>
      </div>
      <Footer />
    </div>
  );
}
