import { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [fields, setFields] = useState({
    resDate: "",
    resTime: "",
    resGuests: "",
    resOccasion: "",
  });

  const minDate = new Date().toISOString().split("T")[0];

  const handleChange = (field) => {
    const updatedFields = { ...fields };
    updatedFields[field.id] = field.value;
    setFields({ ...updatedFields });

    if (field.id === "resDate") {
      dispatch(field.value);
    }

    setIsDisabled(validateFields(updatedFields));
  };

  const validateFields = (fields) => {
    let enable = false;
    for (const field in fields) {
      fields[field] === "" ? (enable = true) : (enable = false);
    }
    return enable;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    submitForm(e);
  };

  // const times = availableTimes.availableTimes;
  return (
    <section className="formWrapper">
      <form onSubmit={handleSumbit} className="formBody">
        <h1 className="formHeader">Reserve a Table</h1>
        <div>
          <label htmlFor="resDate">Choose Date</label>
          <input
            id="resDate"
            value={fields.resDate}
            onChange={(e) => handleChange(e.target)}
            type="date"
            min={minDate}
          />
        </div>
        <div>
          <label htmlFor="resTime">Choose Time</label>
          <select
            id="resTime"
            value={fields.resTime}
            onChange={(e) => handleChange(e.target)}
            required
          >
            <option value="">Select a Time</option>
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="resGuests">
            Number of Guests
          </label>
          <input
            id="resGuests"
            min={1}
            value={fields.resGuests}
            onChange={(e) => {
              handleChange(e.target);
            }}
            type={"number"}
            placeholder={1}
            max={10}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="resOccasion">Occasion:</label>
          <select
            id="resOccasion"
            value={fields.resOccasion}
            onChange={(e) => handleChange(e.target)}
            required
          >
            <option value="">Select an Option</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div>
          <input
            disabled={isDisabled}
            className="submitBtn"
            aria-label="On Click"
            type={"submit"}
            value={"Make Your Reservation"}
          />
        </div>
      </form>
    </section>
  );
};

export { BookingForm };
