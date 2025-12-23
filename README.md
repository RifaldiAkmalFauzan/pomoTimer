# ⏱️ Pomodoro Timer

A simple and effective command-line Pomodoro Timer application built with Node.js. Helps you manage your work sessions and break times with desktop notifications.

## Features

✅ **Customizable Duration** - Set your own work and break time intervals  
✅ **Desktop Notifications** - Get notified when sessions end with system alerts  
✅ **Clean CLI Output** - Real-time countdown display in HH:MM:SS format  
✅ **Graceful Shutdown** - Stop the timer anytime with Ctrl+C  
✅ **Input Validation** - Ensures only valid positive durations are accepted  
✅ **Auto-cycling Sessions** - Automatically switches between work and break sessions  
✅ **Clean Code** - Well-organized, documented, and maintainable codebase

## Requirements

- **Node.js** (v12.0 or higher)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/<YOUR_USERNAME>/pomoTimer.git
cd pomoTimer
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Basic Usage (Default: 25 min work + 5 min break)

```bash
node ./index.js
```

### Custom Duration

```bash
node ./index.js <work_duration> <break_duration>
```

### Examples

**Standard Pomodoro (25 min work, 5 min break):**

```bash
node ./index.js
# or
node ./index.js 25 5
```

**Short Sessions (10 min work, 2 min break):**

```bash
node ./index.js 10 2
```

**Testing (30 seconds work, 30 seconds break):**

```bash
node ./index.js 0.5 0.5
```

## How It Works

1. **Timer Starts** - Begins with Work Time
2. **Countdown** - Shows remaining time in real-time
3. **Session Ends** - Desktop notification appears when time's up
4. **Auto-Switch** - Automatically switches to break time (or work time after break)
5. **Continuous Loop** - Cycles between work and break sessions indefinitely
6. **Stop Anytime** - Press `Ctrl+C` to exit

### Output Example

```
⏱️  Pomodoro Timer Started!
📌 Work: 25 min | Break: 5 min
Press Ctrl+C to stop

Work Time Remaining: 00:24:55
Work Time Remaining: 00:24:54
...
[Desktop notification appears when time ends]
Break Time Remaining: 00:04:59
...
```

## Project Structure

```
pomoTimer/
├── index.js          # Main application file
├── package.json      # Project metadata & dependencies
└── README.md         # This file
```

## Code Architecture

The code is organized into logical sections:

- **Constants** - Default durations and intervals
- **Configuration** - Parse command-line arguments
- **Validation** - Validate input durations
- **UI & Shutdown** - Display messages and handle graceful exit
- **State** - Manage timer state variables
- **Utilities** - Helper functions (time formatting, notifications)
- **Timer Logic** - Core timer and session management
- **Entry** - Application startup

## Dependencies

- **node-notifier** - Cross-platform desktop notifications
- **moment** - DateTime library for time formatting

See `package.json` for more details.

## Tips & Best Practices

💡 **Pomodoro Technique Tips:**

- Focus completely during work sessions
- Take breaks seriously - step away from your desk
- After 4 pomodoros, take a longer break (15-30 min)
- Adjust duration based on your productivity patterns

🔧 **Usage Tips:**

- Use `0.5 0.5` for quick testing (30 seconds each)
- Customize durations based on task complexity
- Run in a persistent terminal so notifications appear even if window is hidden

## Troubleshooting

**Issue:** Timer shows default values instead of custom input

- **Solution:** Make sure to use valid positive numbers as arguments

**Issue:** No desktop notification appears

- **Solution:** Check system notification settings are enabled
- On Windows: Ensure notifications are not disabled in Settings > System > Notifications

**Issue:** "node-notifier" dependency error

- **Solution:** Run `npm install` to install all dependencies

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork, modify, and improve this project!

---

**Happy Pomodoro Sessions! 🍅⏱️**
