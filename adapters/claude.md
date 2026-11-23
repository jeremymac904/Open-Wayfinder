# Claude setup

Targeted documentation check: 2026-11-23. Previous full review: 2026-11-18.

## Basic install

1. Create a Project or start a conversation. Projects are documented for all plans; Free accounts are currently limited to five.
2. Put the [coach persona](../persona/PERSONA.md) in Project instructions or the conversation.
3. Add the [onboarding skill](../skills/onboarding/SKILL.md), then say: “Help me set up Open Wayfinder. Start with one question.”
4. For a work assistant, add the [business assistant builder](../skills/business-assistant-builder/SKILL.md) in a separate Project.
5. Keep your private profile outside this public repository and share only what you choose.

## Native Skills option

Claude supports Skills on Free through Enterprise when code execution is enabled. You can package an Open Wayfinder workflow as a skill folder with `SKILL.md` and its referenced resources, review it, then add it through Customize > Skills. A skill supplies instructions and resources; it does not grant a connector, credential or external write permission.

## Connectors, memory and scheduling

In Cowork, a project can also use memory from ordinary chats. For a work assistant that should stay separate from personal coaching, switch off **Use account memory** on the project’s Memory page. [Cowork project memory](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork)

Claude directory connectors and remote custom MCP connectors can retrieve data or take actions according to their declared tools and the permissions you grant. Remote custom MCP is documented across plans, with Free limited to one. Project uploads are stored knowledge, not live writable files. Paid Projects can automatically use RAG for more knowledge capacity.

Scheduled tasks in Claude Cowork are documented for paid plans and can use installed skills, plugins, connectors and files saved to the Claude account. Scheduled tasks that need files in a connected local folder require Claude Desktop to stay open and connected on that computer. [Local file access](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile) Confirm that the intended tools appear in the scheduled task and test a harmless run before relying on it.

Current authority: [Projects](https://support.claude.com/en/articles/9517075-what-are-projects), [Skills](https://support.claude.com/en/articles/12512180-use-skills-in-claude), [connectors](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), [custom MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), and [scheduled tasks](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork).

**Manual ritual:** Type “Let's check in” in the morning and “Let's review today” in the evening.

**Verification:** Documentation reviewed 2026-11-18. No Open Wayfinder Skill import, connector, write action or scheduled run has been account-tested.
