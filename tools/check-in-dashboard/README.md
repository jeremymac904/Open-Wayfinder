# Check-in dashboard

A private, offline dashboard for mood, energy, stress, connection and confidence.

1. Download `dashboard.html` and `dashboard-core.js` into the same folder; open `dashboard.html` locally in a modern browser. GitHub's file page shows source code rather than running it.
2. Record ratings from 1 to 10 or a note, then save. Ratings are optional. Higher stress means more stress. Saving another check-in on the same date asks before replacing it.
3. Compare the last 7, 14 or 30 calendar days ending on your selected date. Blank ratings are excluded; an absent day is not a zero. Averages are descriptive and do not establish causes or diagnose conditions.

Data is stored in the browser's local storage, not encrypted or synced. Clearing browser data may erase it; use a private device and export a JSON backup. Importing a validated backup replaces existing entries only after confirmation. Deletion requires confirmation. No data is sent to a server by this tool.

For development, run `node dashboard.test.cjs` and `node dashboard-ui.test.cjs` in this directory. Core validation, date windows, missing data, import/export and simulated UI save/clear have been tested. Real-browser interaction testing is still outstanding.

This dashboard does not connect itself to an AI host or your workout tracker. It is a reflection tool, not medical advice.
