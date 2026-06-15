import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import BookingPage from '../pages/BookingPage';
import OrderOnlinePage from '../pages/OrderOnlinePage';
import LoginPage from '../pages/LoginPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import { initializeTimes, updateTimes } from '../utils/bookingTimes';

function submitBookingAPI(formData) {
  const apiSubmit =
    typeof window !== 'undefined' && typeof window.submitAPI === 'function'
      ? window.submitAPI
      : () => true;

  return apiSubmit(formData);
}

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function submitForm(formData) {
    const isSubmitted = submitBookingAPI(formData);

    if (isSubmitted) {
      navigate('/confirmed-booking');
    }

    return isSubmitted;
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
