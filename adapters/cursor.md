# Cursor and file-based agents

Targeted documentation check: 2026-11-25. Previous full review: 2026-11-18.

## Recommended install

1. Clone or download this repository into a private workspace. Keep personal data in an ignored `user-data/` folder, never in the public repository.
2. Copy the Open Wayfinder skill folders you want into `.agents/skills/` or `.cursor/skills/`, or keep them where they are and explicitly ask Agent to read the relevant `SKILL.md`.
3. Put durable project-wide instructions in a root `AGENTS.md` or Cursor rule, including the requirement to read [the coach persona](../persona/PERSONA.md) and your private profile only when you authorize it.
4. Start with: “Help me set up Open Wayfinder. Start with one question.”
5. Keep personal coaching files separate from business files and source code.

Cursor documents automatic discovery of Agent Skills from `.agents/skills/`, `.cursor/skills/`, user-level equivalents, and compatible Claude/Codex skill directories. Local personal skills do not automatically reach Cloud Agents; enable the documented sync option if desired. Cursor Automations do not load synced personal skills, so any skill required by an automation must be stored in the repository's `.cursor/skills/` folder.

## Tools, MCP and scheduling

Agent can read and edit files, run terminal commands and use configured MCP tools. MCP supports stdio, SSE and Streamable HTTP. Tool approval is on by default; auto-run expands risk and should only be used with reviewed tools.

Cursor Automations can run Cloud Agents on schedules or events and can use selected MCP tools. The current pricing page places cloud agents and automations on Premium and higher. Do not assume a local chat, skill or rule runs on a schedule without an Automation or separate scheduler.

Current authority: [Skills](https://cursor.com/docs/skills), [tools](https://cursor.com/docs/agent/overview), [MCP](https://cursor.com/docs/mcp), and [Automations](https://cursor.com/docs/cloud-agent/automations).

A scheduled trigger can start without a repository. Select the repo explicitly if the run needs its skills or files. Cloud Agent usage bills to the creator under **Me** or to the team under **Service account**. [Triggers and billing](https://cursor.com/docs/cloud-agent/automations)

**Manual ritual:** Open the workspace and ask for a morning check-in or evening review.

**Verification:** Documentation reviewed 2026-11-18. No Open Wayfinder skill discovery, MCP action, Cloud Agent or Automation has been end-to-end tested.
