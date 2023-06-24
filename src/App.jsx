import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("#eee");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const copyHandler = (e) => {
    navigator.clipboard.writeText(value);
    alert("the text has copied!!!");
  };

  return (
    <div className="App" style={{ backgroundColor: `${value}` }}>
      <div className="container">
        <input
          type="color"
          onChange={changeHandler}
          value={value}
          className="input"
        />
        <h1 onClick={copyHandler}>{value}</h1>
      </div>
    </div>
  );
}

export default App;
