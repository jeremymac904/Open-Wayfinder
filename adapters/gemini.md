# Gemini setup

Targeted documentation check: 2026-11-25. Previous full review: 2026-11-18.

## Use a Skill for personal accounts

Google's documented personal-account migration is now active: Gems became read-only on 2026-11-17 and are scheduled for removal on 2026-12-17. For an adult personal Google Account, use a Gemini Skill instead of creating a new Gem.

1. On Gemini web or the Gemini Mac app, create a Skill or import the relevant Open Wayfinder `SKILL.md`.
2. Include the [coach persona](../persona/PERSONA.md) as supporting instructions/context.
3. Start with the [onboarding skill](../skills/onboarding/SKILL.md) and say: “Help me set up Open Wayfinder. Start with one question.”
4. Keep the [personal profile](../templates/soul.md) private and share only what you choose.
5. Create a separate Skill or conversation from the [business assistant builder](../skills/business-assistant-builder/SKILL.md) for work.

Google says existing personal Gems will be recreated as Skills, but account migration and result quality still need to be checked. For adult personal accounts, compare the Gem and its replacement skill before December 17, 2026. Download missing originals while the Gem is accessible. Google excludes GitHub files, audio, video, archives and legacy Office formats from transfer. If attachments exceed 100 MB per skill, Google drops the largest first. [Migration details](https://support.google.com/gemini/answer/18560919?hl=en) Google lists March 2027 for Workspace business, enterprise and nonprofit accounts, and June 2027 for education.

## Tools and scheduling limits

On eligible accounts, the **Memory** switch under **Settings → Personal Intelligence** controls personalization from past Gemini chats. Keep the authoritative profile in your chosen file. [Gemini memory](https://support.google.com/gemini/answer/16598469)

Skills can use some Connected Apps, but currently do not work with Canvas or Deep Research, and most former Gem default tools are not yet supported. A connected Drive file is not automatically a live writable vault; verify each app's actual read/write behavior.

Scheduled actions are gradually available, require Gemini History to be on, allow up to 10 active actions and may prepare results ahead of delivery. Gemini Tasks and their schedules are a separate subscription-dependent feature.

Current authority: [Skills](https://support.google.com/gemini/answer/17094296), [Gems-to-Skills transition](https://support.google.com/gemini/answer/18560919), [scheduled actions](https://support.google.com/gemini/answer/16316416), and [Tasks](https://support.google.com/gemini/answer/17094507).

**Google Workspace developer integrations.** Google began rolling out its Workspace MCP servers on November 24. A compatible, authorized host can read and revise Drive files and edit Google Docs. Drive and Docs each list up to ten days for account availability. [Drive release notes](https://developers.google.com/workspace/drive/release-notes) · [Docs release notes](https://developers.google.com/workspace/docs/release-notes) The Standard tier includes 5,000 MCP requests per day for each product in each Cloud project, with no billing account required. Higher MCP quotas require Scaled enrollment, linked billing and a quota increase request. [Google quota guide](https://developers.google.com/workspace/guides/quota-usage-tiers) For the Gemini chat setup above, check the actions in its own Connected Apps settings.

**Manual ritual:** Start a morning chat with “Let's check in” and an evening chat with “Let's review today.”

**Verification:** Migration guidance updated 2026-11-18. No Open Wayfinder Skill import, Connected App write or scheduled action has been account-tested.
