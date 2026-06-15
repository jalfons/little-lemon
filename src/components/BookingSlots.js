import BookingSlot from './BookingSlot';

function BookingSlots({ availableTimes }) {
  return (
    <section className="booking-slots" aria-labelledby="available-times-title">
      <h2 id="available-times-title">Available booking times</h2>

      {availableTimes.length > 0 ? (
        <ul>
          {availableTimes.map((time) => (
            <BookingSlot key={time} time={time} />
          ))}
        </ul>
      ) : (
        <p>No booking times are available for this date.</p>
      )}
    </section>
  );
}

export default BookingSlots;
