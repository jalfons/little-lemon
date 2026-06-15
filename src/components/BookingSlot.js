function BookingSlot({ time }) {
  return (
    <li className="booking-slot">
      <span>{time}</span>
      <span>Available</span>
    </li>
  );
}

export default BookingSlot;
