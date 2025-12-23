const notifier = require('node-notifier');
const moment = require('moment');

// ============ Constants ============
const DEFAULT_POMODORO_DURATION = 25; // minutes
const DEFAULT_BREAK_DURATION = 5; // minutes
const TIMER_INTERVAL = 1000; // milliseconds

// ============ Configuration ============
const POMODORO_DURATION = process.argv[2] ? parseFloat(process.argv[2]) : DEFAULT_POMODORO_DURATION;
const BREAK_DURATION = process.argv[3] ? parseFloat(process.argv[3]) : DEFAULT_BREAK_DURATION;

// ============ Validation ============
function validateDuration(duration) {
  return !isNaN(duration) && duration > 0;
}

if (!validateDuration(POMODORO_DURATION) || !validateDuration(BREAK_DURATION)) {
  console.error('❌ Error: Durasi harus berupa angka positif');
  process.exit(1);
}

// ============ UI & Shutdown ============
function displayStartMessage() {
  console.log('⏱️  Pomodoro Timer Started!');
  console.log(`📌 Work: ${POMODORO_DURATION} min | Break: ${BREAK_DURATION} min`);
  console.log('Press Ctrl+C to stop\n');
}

process.on('SIGINT', () => {
  console.log('\n⏹️  Timer stopped');
  process.exit(0);
});

// ============ State ============
let isWorking = false;
let remainTime = 0;

// ============ Utilities ============
/**
 * Format seconds to HH:MM:SS format
 * @param {number} totalSeconds - Total seconds to format
 * @returns {string} Formatted time string
 */
function formatTime(totalSeconds) {
  const duration = moment.duration(totalSeconds, 'seconds');
  const hours = duration.hours().toString().padStart(2, '0');
  const minutes = duration.minutes().toString().padStart(2, '0');
  const seconds = duration.seconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Show desktop notification
 * @param {boolean} isWorkTime - True if work time, false if break time
 */
function showNotification(isWorkTime) {
  const title = isWorkTime ? 'Working Time!' : 'Break Time!';
  const message = isWorkTime ? 'Good Work!' : 'Good Break!';

  notifier.notify({
    title,
    message,
    sound: true,
    wait: true,
  });
}

// ============ Timer Logic ============
/**
 * Start/continue pomodoro timer
 * @param {number} duration - Duration in minutes
 */
function startTimer(duration) {
  isWorking = !isWorking;
  remainTime = duration * 60;

  const timer = setInterval(() => {
    remainTime--;
    const formattedTime = formatTime(remainTime);
    const timerType = isWorking ? 'Work' : 'Break';

    console.log(`${timerType} Time Remaining: ${formattedTime}`);

    if (remainTime <= 0) {
      clearInterval(timer);
      showNotification(isWorking);

      // Start next session
      const nextDuration = isWorking ? BREAK_DURATION : POMODORO_DURATION;
      startTimer(nextDuration);
    }
  }, TIMER_INTERVAL);
}

// ============ Application Entry ============
displayStartMessage();
startTimer(POMODORO_DURATION);
