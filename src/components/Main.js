import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import BookingPage from '../pages/BookingPage';
import OrderOnlinePage from '../pages/OrderOnlinePage';
import LoginPage from '../pages/LoginPage';
import { initializeTimes, updateTimes } from '../utils/bookingTimes';

function Main() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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
            />
          }
        />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
