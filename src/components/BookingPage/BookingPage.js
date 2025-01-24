import { BookingForm } from "../BookingForm/BookingForm";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <header className="hero">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </header>
  );
};

export { BookingPage };
