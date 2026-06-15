import { useEffect, useState } from 'react';

function BookingForm({ availableTimes, dispatchAvailableTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(time)) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time]);

  function handleDateChange(event) {
    const selectedDate = event.target.value;

    setDate(selectedDate);

    dispatchAvailableTimes({
      type: 'date_changed',
      payload: selectedDate,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const reservationData = {
      date,
      time,
      guests,
      occasion,
    };

    console.log('Reservation submitted:', reservationData);

    dispatchAvailableTimes({
      type: 'reservation_submitted',
      payload: reservationData,
    });

    alert('Reservation submitted. Check the browser console for the form data.');
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        className="primary-button booking-submit"
      />
    </form>
  );
}

export default BookingForm;
