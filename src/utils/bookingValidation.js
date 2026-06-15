export const occasions = ['Birthday', 'Anniversary'];

export function getTodayDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function validateBookingForm({
  date,
  time,
  guests,
  occasion,
  availableTimes = [],
}) {
  const guestNumber = Number(guests);

  return {
    date: date !== '' && date >= getTodayDateString(),
    time: time !== '' && availableTimes.includes(time),
    guests:
      Number.isInteger(guestNumber) && guestNumber >= 1 && guestNumber <= 10,
    occasion: occasions.includes(occasion),
  };
}

export function isBookingFormValid(formData) {
  return Object.values(validateBookingForm(formData)).every(Boolean);
}
