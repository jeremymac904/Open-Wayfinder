# Workout tracker

A small offline workout log. Download both `index.html` and `tracker-core.js` into the same folder, then open `index.html` in a modern browser. Opening the HTML file on GitHub displays the source rather than running it.

Entries are stored in the browser's local storage for that browser and file origin. Storage is not encrypted; it can be cleared by the browser or operating system and may behave differently across browsers. It is not synchronized. Export the JSON backup and store it privately. Restoring a backup replaces the current log only after confirmation.

Log a date, exercise, sets, reps per set, weight, units, whether the weight is per hand, total, or bodyweight, and optional notes. Use separate entries for sets with different repetitions or loads. A zero weight can represent bodyweight. Delete individual entries or clear the list with confirmation.

Development verification: run `node tracker.test.cjs` and `node ui-check.cjs` from this directory. Core validation, JSON round-trip, and simulated UI save/clear have been tested. A real-browser interaction test has not yet been completed in the current environment.

This tracker has no account, AI integration, or clinical function. It does not send data to a server. Confirm device and browser privacy settings before storing sensitive information.
