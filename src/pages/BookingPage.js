import BookingForm from '../components/BookingForm';
import BookingSlots from '../components/BookingSlots';

function BookingPage({ availableTimes, dispatchAvailableTimes }) {
  return (
    <section className="page-section booking-page" aria-labelledby="booking-title">
      <div className="container booking-page-layout">
        <div>
          <h1 id="booking-title">Reserve a Table</h1>
          <p>
            Complete the form below to reserve a table at Little Lemon.
          </p>

          <BookingForm
            availableTimes={availableTimes}
            dispatchAvailableTimes={dispatchAvailableTimes}
          />
        </div>

        <BookingSlots availableTimes={availableTimes} />
      </div>
    </section>
  );
}

export default BookingPage;
