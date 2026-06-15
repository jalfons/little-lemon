import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import BookingSlots from './components/BookingSlots';
import { initializeTimes, updateTimes } from './utils/bookingTimes';

describe('BookingForm', () => {
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

  test('displays available booking times from props', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00', '19:00']}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '19:00' })).toBeInTheDocument();
  });

  test('dispatches a date change when the user selects a date', () => {
    const dispatchAvailableTimes = jest.fn();

    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={dispatchAvailableTimes}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-06-20' },
    });

    expect(dispatchAvailableTimes).toHaveBeenCalledWith({
      type: 'date_changed',
      payload: '2026-06-20',
    });
  });

  test('dispatches a submitted reservation when the form is submitted', () => {
    const dispatchAvailableTimes = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const consoleMock = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatchAvailableTimes={dispatchAvailableTimes}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-06-20' },
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

    expect(dispatchAvailableTimes).toHaveBeenCalledWith({
      type: 'reservation_submitted',
      payload: {
        date: '2026-06-20',
        time: '18:00',
        guests: '4',
        occasion: 'Anniversary',
      },
    });

    alertMock.mockRestore();
    consoleMock.mockRestore();
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

describe('booking time reducer functions', () => {
  test('initializeTimes returns the initial available times', () => {
    expect(initializeTimes()).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
  });

  test('updateTimes returns initial times when the date changes', () => {
    const result = updateTimes(['17:00'], {
      type: 'date_changed',
      payload: '2026-06-20',
    });

    expect(result).toEqual(initializeTimes());
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
