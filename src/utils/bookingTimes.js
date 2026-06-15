export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'date_changed':
      return initializeTimes();

    case 'reservation_submitted':
      return state.filter((time) => time !== action.payload.time);

    default:
      return state;
  }
}
