import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import BookingSlots from './components/BookingSlots';
import { initializeTimes, updateTimes } from './utils/bookingTimes';
import {
  getTodayDateString,
  isBookingFormValid,
  validateBookingForm,
} from './utils/bookingValidation';

function getFutureDateString() {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);
  return getTodayDateString(futureDate);
}

afterEach(() => {
  delete window.fetchAPI;
  jest.restoreAllMocks();
});

describe('BookingForm content and HTML5 validation', () => {
  test('renders all booking form fields', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00', '19:00']}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  test('applies HTML5 validation attributes to the date field', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min', getTodayDateString());
    expect(dateInput).toBeRequired();
  });

  test('applies HTML5 validation attributes to the time field', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    const timeSelect = screen.getByLabelText(/choose time/i);

    expect(timeSelect).toBeRequired();
    expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
  });

  test('applies HTML5 validation attributes to the guests field', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();
  });

  test('applies HTML5 validation attributes to the occasion field', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(occasionSelect).toBeRequired();
    expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Anniversary' })
    ).toBeInTheDocument();
  });
});

describe('BookingForm React validation and submission', () => {
  test('disables the submit button when the form is invalid', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    expect(
      screen.getByRole('button', { name: /make your reservation/i })
    ).toBeDisabled();
  });

  test('enables the submit button when the form is valid', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: getFutureDateString() },
    });

    expect(
      screen.getByRole('button', { name: /make your reservation/i })
    ).not.toBeDisabled();
  });

  test('dispatches a date change when the user selects a date', () => {
    const dispatchAvailableTimes = jest.fn();
    const futureDate = getFutureDateString();

    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={dispatchAvailableTimes}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: futureDate },
    });

    expect(dispatchAvailableTimes).toHaveBeenCalledWith({
      type: 'date_changed',
      payload: futureDate,
    });
  });

  test('calls submitForm and dispatches a submitted reservation when the form is valid', () => {
    const dispatchAvailableTimes = jest.fn();
    const submitForm = jest.fn(() => true);
    const futureDate = getFutureDateString();

    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={dispatchAvailableTimes}
        submitForm={submitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: futureDate },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '18:00' },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Anniversary' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /make your reservation/i })
    );

    expect(submitForm).toHaveBeenCalledWith({
      date: futureDate,
      time: '18:00',
      guests: '4',
      occasion: 'Anniversary',
    });

    expect(dispatchAvailableTimes).toHaveBeenCalledWith({
      type: 'reservation_submitted',
      payload: {
        date: futureDate,
        time: '18:00',
        guests: '4',
        occasion: 'Anniversary',
      },
    });
  });
});

describe('booking validation utility functions', () => {
  test('returns valid when all booking form fields are valid', () => {
    const validFormData = {
      date: getFutureDateString(),
      time: '18:00',
      guests: '4',
      occasion: 'Birthday',
      availableTimes: ['17:00', '18:00'],
    };

    expect(validateBookingForm(validFormData)).toEqual({
      date: true,
      time: true,
      guests: true,
      occasion: true,
    });

    expect(isBookingFormValid(validFormData)).toBe(true);
  });

  test('returns invalid when booking form fields are invalid', () => {
    const invalidFormData = {
      date: '2000-01-01',
      time: '15:00',
      guests: '0',
      occasion: 'Wedding',
      availableTimes: ['17:00', '18:00'],
    };

    expect(validateBookingForm(invalidFormData)).toEqual({
      date: false,
      time: false,
      guests: false,
      occasion: false,
    });

    expect(isBookingFormValid(invalidFormData)).toBe(false);
  });
});

describe('BookingSlots', () => {
  test('renders available booking slots', () => {
    render(<BookingSlots availableTimes={['17:00', '18:00']} />);

    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    expect(screen.getAllByText('Available')).toHaveLength(2);
  });

  test('shows a message when no booking slots are available', () => {
    render(<BookingSlots availableTimes={[]} />);

    expect(
      screen.getByText(/no booking times are available/i)
    ).toBeInTheDocument();
  });
});

describe('booking time reducer functions with API', () => {
  test('initializeTimes returns available times from fetchAPI', () => {
    window.fetchAPI = jest.fn(() => ['17:30', '18:30']);

    expect(initializeTimes()).toEqual(['17:30', '18:30']);
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('updateTimes returns API times when the date changes', () => {
    window.fetchAPI = jest.fn(() => ['19:00', '20:00']);

    const result = updateTimes(['17:00'], {
      type: 'date_changed',
      payload: getFutureDateString(),
    });

    expect(result).toEqual(['19:00', '20:00']);
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('updateTimes removes the reserved time after submit', () => {
    const result = updateTimes(['17:00', '18:00', '19:00'], {
      type: 'reservation_submitted',
      payload: {
        time: '18:00',
      },
    });

    expect(result).toEqual(['17:00', '19:00']);
  });
});
