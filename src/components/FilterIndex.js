import "./filterIndex.css";
const FilterIndex = (props) => {
  const selectedChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const genderChangeHandler = (event) => {
      
    props.onChangeGender(event.target.value);
  };
  const clockChangeHandler = (event) => {
    props.onChangeClock(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Choose your favorite colors?</label>
        <select value={props.selected} onChange={selectedChangeHandler}>
          <option value="red">RED</option>
          <option value="green">GREEN</option>
          <option value="yellow">YELLOW</option>
          <option value="blue">BLUE</option>
        </select>
      </div>
      <div
        className="Gender"
        value={props.gender}
        onChange={genderChangeHandler}
      >
        <p>Choose your gender:</p>

        <input type="radio"name="Gender" value="Male" />
        Male
        <input type="radio" name="Gender" value="Female" />
        Female
        <input type="radio"  name="Gender" value="Others" />
        Others
      </div>

      <div>
        <label className="time">Select a time:</label>
        <input
          value={props.clock}
          onChange={clockChangeHandler}
          type="time"
          id="appt"
          name="appt"
        />
      </div>
    </div>
  );
};
export default FilterIndex;
