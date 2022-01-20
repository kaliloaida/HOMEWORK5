import { useState } from "react";
import "./App.css";
import FilterIndex from "./components/FilterIndex";

function App() {
  const [filteredColor, setFilteredColor] = useState("yellow");
  const filterChangeHandler = (selectedColor) => {
    setFilteredColor(selectedColor);
  };

  const [filteredGender, setFilteredGender] = useState("Female");
  const genderChangeHandler = (selectedGender) => {
    setFilteredGender(selectedGender);
  };

  const [filteredClock, setFilteredClock] = useState("21:24");
  const clockChangeHandler = (selectedClock) => {
    setFilteredClock(selectedClock);
  };




  return (
    <div className="App">
      <FilterIndex
        selected={filteredColor}
        onChangeFilter={filterChangeHandler}
        gender={filteredGender}
        onChangeGender={genderChangeHandler}
        clock={filteredClock}
        onChangeClock={clockChangeHandler}

      />
      {console.log(filteredColor)}
      {console.log(filteredGender)}
      {console.log(filteredClock)}
    </div>
  );
}

export default App;
