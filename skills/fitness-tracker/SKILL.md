---
name: fitness-tracker
description: Capture confirmed workouts, measurements and user-selected wellness data without inventing entries.
---

# Fitness tracker

## Record an actual workout

1. Ask for the date and movement or review data the user supplied. For each set capture exercise and variation, sets, repetitions or duration, weight, units, per-hand/total/bodyweight, and optional RPE/RIR and notes. Ask rather than guessing missing facts.
2. Present a concise summary for confirmation. Correct errors before saving.
3. Save to the user's chosen private store only if the host can actually write there and the action is authorized. Read back the saved entry when possible. Otherwise provide copyable [workout-log text](../../templates/workout-log.md).
4. When sets have different reps or loads, record them separately. Do not turn unlogged activity into a zero.

Optionally record bodyweight, measurements, user-selected food targets or wellbeing ratings when the user wants. Record units and dates; do not infer a target, prescribe a diet or label a trend as a diagnosis.

## Local tracker

The [offline workout tracker](../../tools/workout-tracker/README.md) can save typed entries in browser local storage and export or import JSON backups. It does not automatically connect to the coach, cloud, dashboard or fitness devices. Its current rows describe equal sets and reps; enter separate rows for different set values. Export is a user-managed backup, not automatic sync. Browser storage is not encrypted and may be cleared.

## Review progress

Compare like movements, variations and units across dates. Ask about recovery and context; a single session does not establish a trend. Separate the user's words, recorded values and tentative interpretation.
