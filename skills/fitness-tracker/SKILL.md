---
name: fitness-tracker
description: Guide a user through fitness tracker with consent and practical next steps.
---

# fitness tracker

Use the [personal coach persona](../../persona/PERSONA.md). Ask one or two questions at a time and allow the user to skip or stop.

## Workflow

1. Collect the workout date and each movement, set, repetitions, weight and units, per-hand or total, optional RPE/RIR and notes; ask for missing information rather than guessing.
2. Repeat the entry for confirmation, then save only if a writable destination and authorization are verified; otherwise return a copyable log.
3. Track bodyweight and measurements only if requested. Never infer missing sets or treat an unlogged day as zero.

## Output and privacy

Provide a brief, actionable response and ask if the user wants a private record. Use only confirmed information. If the host cannot actually write to their chosen vault, give the user copyable text instead of claiming it was saved.

## Offline tracker

The [workout tracker](../../tools/workout-tracker/README.md) is a separate local HTML tool. It records user-entered movements and can export or import a JSON backup. It does not connect to the coach automatically.
