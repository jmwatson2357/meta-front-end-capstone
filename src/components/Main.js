import { Route, Routes, useNavigate } from "react-router-dom";

import { ConfirmedBooking } from "./ConfirmedBooking/ConfirmedBooking";
import { Hero } from "./Hero/Hero";
import { BookingPage } from "./BookingPage/BookingPage";
import { useReducer } from "react";
import { useLocal } from "../lib/local";
//import {useState} from 'react';

const Main = () => {
  const { fetchAPI, submitAPI } = useLocal();
  const navigate = useNavigate();
  // const availableTimes = useState([
  //"5:00pm",
  //"6:00pm",
  //"7:00pm",
  //"8:00pm",
  //"9:00pm",
  //"10:00pm",
  //])

  // const initializeTimes = [
  //   "5:00pm",
  //   "6:00pm",
  //   "7:00pm",
  //   "8:00pm",
  //   "9:00pm",
  //   "10:00pm",
  // ];

  const initializeTimes = fetchAPI(new Date());
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  function updateTimes(state, date) {
    const times = fetchAPI(new Date(date));

    return times;
  }

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export { Main };
