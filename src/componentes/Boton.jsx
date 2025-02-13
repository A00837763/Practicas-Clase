import React from "react";

function Boton({ name, click, style }) {
  return (
    <button style={style} onClick={click}>
      {name}
    </button>
  );
}

export default Boton;
