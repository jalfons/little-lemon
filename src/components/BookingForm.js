import { useEffect, useMemo, useState } from 'react';
import {
  getTodayDateString,
  isBookingFormValid,
  occasions,
  validateBookingForm,
} from '../utils/bookingValidation';

function BookingForm({
  availableTimes,
  dispatchAvailableTimes,
  submitForm = () => true,
}) {
  const today = getTodayDateString();

  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [wasSubmitted, setWasSubmitted] = useState(false);

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(time)) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time]);

  const formData = useMemo(
    () => ({
      date,
      time,
      guests,
      occasion,
      availableTimes,
    }),
    [availableTimes, date, guests, occasion, time]
  );

  const validation = validateBookingForm(formData);
  const isFormValid = isBookingFormValid(formData);

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
    setWasSubmitted(true);

    if (!isFormValid) {
      return;
    }

    const reservationData = {
      date,
      time,
      guests,
      occasion,
    };

    const isSubmitted = submitForm(reservationData);

    if (isSubmitted) {
      dispatchAvailableTimes({
        type: 'reservation_submitted',
        payload: reservationData,
      });
    } else {
      alert('Unable to submit reservation. Please try again.');
    }
  }

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        onChange={handleDateChange}
        aria-describedby="date-error"
        aria-invalid={!validation.date}
        required
      />
      {!validation.date && (wasSubmitted || date !== '') && (
        <p className="form-error" id="date-error" role="alert" aria-live="polite">
          Please choose today or a future date.
        </p>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        aria-describedby="time-error"
        aria-invalid={!validation.time}
        required
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      {!validation.time && wasSubmitted && (
        <p className="form-error" id="time-error" role="alert" aria-live="polite">
          Please choose an available reservation time.
        </p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
        aria-describedby="guests-error"
        aria-invalid={!validation.guests}
        required
      />
      {!validation.guests && (wasSubmitted || guests !== '') && (
        <p className="form-error" id="guests-error" role="alert" aria-live="polite">
          Please choose between 1 and 10 guests.
        </p>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
        aria-invalid={!validation.occasion}
        required
      >
        {occasions.map((occasionOption) => (
          <option key={occasionOption} value={occasionOption}>
            {occasionOption}
          </option>
        ))}
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        className="primary-button booking-submit"
        disabled={!isFormValid}
        aria-disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;
