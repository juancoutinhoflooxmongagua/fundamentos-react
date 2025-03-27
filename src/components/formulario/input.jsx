import React, { useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState("inicial");

  function quandoMudar(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <input value={value} onChange={quandoMudar} />
    </div>
  );
}
