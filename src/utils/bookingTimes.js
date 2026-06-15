function seededRandom(seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return function random() {
    s = (s * a) % m;
    return s / m;
  };
}

function localFetchAPI(date) {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let hour = 17; hour <= 23; hour += 1) {
    if (random() < 0.5) {
      result.push(`${hour}:00`);
    }

    if (random() < 0.5) {
      result.push(`${hour}:30`);
    }
  }

  return result;
}

function parseDate(dateValue) {
  if (dateValue instanceof Date) {
    return dateValue;
  }

  if (typeof dateValue === 'string') {
    const [year, month, day] = dateValue.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  return new Date();
}

function getAvailableTimes(dateValue) {
  const date = parseDate(dateValue);
  const apiFetch =
    typeof window !== 'undefined' && typeof window.fetchAPI === 'function'
      ? window.fetchAPI
      : localFetchAPI;

  return apiFetch(date);
}

export function initializeTimes() {
  return getAvailableTimes(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'date_changed':
      return getAvailableTimes(action.payload);

    case 'reservation_submitted':
      return state.filter((time) => time !== action.payload.time);

    default:
      return state;
  }
}
