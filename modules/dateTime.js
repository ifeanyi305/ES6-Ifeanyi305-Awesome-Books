const time = document.querySelector('.time');
const date = document.querySelector('.date');

const formatTime = (date) => {
  const hour = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let state;

  if (date.getHours() < 12) {
    state = 'am';
  } else {
    state = 'pm';
  }

  return `${hour.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${state}`;
};

const formatDate = (date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let state;

  switch (day) {
    case 1:
      state = 'st';
      break;
    case 2:
      state = 'nd';
      break;
    default:
      state = 'th';
      break;
  }

  return `${months[month]} ${day}${state} ${year},`;
};

setInterval(() => {
  const today = new Date();

  time.textContent = formatTime(today);
  date.textContent = formatDate(today);
}, 1000);