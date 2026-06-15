import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import BookingPage from '../pages/BookingPage';
import OrderOnlinePage from '../pages/OrderOnlinePage';
import LoginPage from '../pages/LoginPage';

function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'date_changed':
      return initializeTimes();

    case 'reservation_submitted':
      return state.filter((time) => time !== action.payload.time);

    default:
      return state;
  }
}

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
