import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button className="toggleForm" onClick={() => {
        // setShow(show ? false : true);
        setShow(!show)
      }}>{show ? "AddHouse" : "Rental"}
        
      </button>
      {show ? < Rentals /> : <AddHouse />}
      {/* Show component based on state */}
      
      <br />
     
     
      
    </div>
  );
}

export default App;
