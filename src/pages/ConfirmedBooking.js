import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="page-section confirmed-booking" aria-labelledby="confirmed-booking-title">
      <div className="container">
        <h1 id="confirmed-booking-title">Booking Confirmed</h1>
        <p>
          Thank you. Your table reservation at Little Lemon has been confirmed.
        </p>
        <Link to="/" className="primary-button">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
