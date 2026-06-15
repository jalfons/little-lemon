function BookingPage() {
  return (
    <section className="page-section" aria-labelledby="booking-title">
      <div className="container">
        <h1 id="booking-title">Reserve a Table</h1>
        <p>
          Book a table at Little Lemon. The full booking form will be added in
          the next steps of the project.
        </p>

        <form className="booking-form">
          <label htmlFor="booking-date">Choose date</label>
          <input id="booking-date" type="date" />

          <label htmlFor="booking-time">Choose time</label>
          <select id="booking-time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input id="guests" type="number" min="1" max="10" defaultValue="2" />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>

          <button type="submit" className="primary-button">
            Make Your Reservation
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingPage;
