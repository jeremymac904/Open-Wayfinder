# Gemini setup

Last checked against official documentation: 2026-11-18.

## Use a Skill for personal accounts

Google's documented personal-account migration is now active: Gems became read-only on 2026-11-17 and are scheduled for removal on 2026-12-17. For an adult personal Google Account, use a Gemini Skill instead of creating a new Gem.

1. On Gemini web or the Gemini Mac app, create a Skill or import the relevant Open Wayfinder `SKILL.md`.
2. Include the [coach persona](../persona/PERSONA.md) as supporting instructions/context.
3. Start with the [onboarding skill](../skills/onboarding/SKILL.md) and say: “Help me set up Open Wayfinder. Start with one question.”
4. Keep the [personal profile](../templates/soul.md) private and share only what you choose.
5. Create a separate Skill or conversation from the [business assistant builder](../skills/business-assistant-builder/SKILL.md) for work.

Google says existing personal Gems will be recreated as Skills, but account migration and result quality still need to be checked. Workspace business, nonprofit and education transitions are documented for 2027, so follow the target account's current interface.

## Tools and scheduling limits

Skills can use some Connected Apps, but currently do not work with Canvas or Deep Research, and most former Gem default tools are not yet supported. A connected Drive file is not automatically a live writable vault; verify each app's actual read/write behavior.

Scheduled actions are gradually available, require Activity to be on, allow up to 10 active actions and may prepare results ahead of delivery. Gemini Tasks and their schedules are a separate subscription-dependent feature.

Current authority: [Skills](https://support.google.com/gemini/answer/17094296), [Gems-to-Skills transition](https://support.google.com/gemini/answer/18560919), [scheduled actions](https://support.google.com/gemini/answer/16316416), and [Tasks](https://support.google.com/gemini/answer/17094507).

**Manual ritual:** Start a morning chat with “Let's check in” and an evening chat with “Let's review today.”

**Verification:** Migration guidance updated 2026-11-18. No Open Wayfinder Skill import, Connected App write or scheduled action has been account-tested.
