# ChatGPT setup

Last checked against official documentation: 2026-11-18.

## Basic install

1. Open a new conversation or create a Project if it is available to your account.
2. Copy the [coach persona](../persona/PERSONA.md) into the conversation or Project instructions.
3. Add the contents of the [onboarding skill](../skills/onboarding/SKILL.md), then say: “Help me set up Open Wayfinder. Start with one question.”
4. Keep your [private profile](../templates/soul.md) outside this public repository and share only what you want the provider to process.
5. For business, use the [business assistant builder](../skills/business-assistant-builder/SKILL.md) in a separate Project or conversation.

## Optional connections

ChatGPT apps can search, sync, display interactive interfaces or perform actions depending on the app, plan and permissions. OpenAI-built apps are documented as search-only today. Full custom MCP write/modify support is beta on Business and Enterprise/Edu on web; Pro custom MCP is limited to read/fetch. Installing a plugin or connecting an app does not create a schedule or prove write access.

Before depending on a connector, test one permitted read, one authorized reversible write, a read-back, and revocation. Do not use private coaching data for the test.

## Scheduling and memory limits

Scheduled tasks can be recurring or event-triggered where eligible, but a task created in a Project cannot access files uploaded to or stored in that Project. Active-task limits and event support vary by plan. A Project upload is context, not automatically a live writable vault.

Use [Projects](https://help.openai.com/en/articles/10169521-projects-in-chatgpt), [apps](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt), [custom MCP](https://help.openai.com/en/articles/12584461) and [scheduled tasks](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt) as the current authority.

**Manual ritual:** Start a morning conversation with “Let's check in” and an evening conversation with “Let's review today.”

**Verification:** Documentation reviewed 2026-11-18. No Open Wayfinder account connection, scheduled run or end-to-end read/write workflow has been recorded.
