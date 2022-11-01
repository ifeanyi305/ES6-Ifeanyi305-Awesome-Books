import { DateTime } from './luxon.js';

const date = () => {
  const currentTime = document.querySelector('.date');
  const now = DateTime.now();
  currentTime.innerHTML = `
  ${now.day}
  -${now.month}-
  ${now.year}
  ${now.hour}:
  ${now.minute}:
  ${now.second}
  `;
};

export default date;