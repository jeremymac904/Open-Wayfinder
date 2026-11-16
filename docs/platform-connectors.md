# Platform capability guide

Last reviewed: 2026-11-16. These are provider-documented features, not evidence of an individual's plan, connection or successful workflow. Features, pricing, geographic availability and permissions change. Recheck the links before setup.

| Platform | Documented starting point | Limits / what to verify |
|---|---|---|
| ChatGPT | [Projects](https://help.openai.com/en/articles/10169521-projects-in-chatgpt), [apps](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt), [tasks](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt), [custom MCP apps](https://help.openai.com/en/articles/12584461) | Apps and actions depend on account, app and permissions. Provider notes scheduled tasks in projects cannot access uploaded or project files; verify your task's actual sources. |
| Claude | [Projects](https://support.anthropic.com/en/articles/9517075-what-are-projects), [connectors](https://support.anthropic.com/en/articles/11817150-connect-your-tools-to-unlock-a-smarter-more-capable-ai-companion) | Project files and connected tools are different. Check plan, tool-specific read/write permissions, and whether a live source refreshes. |
| Gemini | [Gems](https://support.google.com/gemini/answer/15146780), [scheduled actions](https://support.google.com/gemini/answer/16316416) | Accounts and features vary. Google has documented a [transition from Gems to skills](https://support.google.com/gemini/answer/18560919); check current eligibility and timing for your account. |
| Microsoft 365 Copilot | [Copilot connectors](https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/overview), [Copilot Studio tools](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors) | Organization and administrator settings, licensing and connector capabilities differ; knowledge access does not establish write access. |
| Cursor | [Agent tools](https://docs.cursor.com/en/agent/tools), [MCP](https://docs.cursor.com/context/model-context-protocol) | Local access and server actions depend on configuration and permissions; use a private workspace for personal records. |
| Local models | [Ollama tool calling](https://docs.ollama.com/capabilities/tool-calling) | Model quality and host tooling vary. Local inference alone does not supply a scheduler, file access or MCP connection. |

## Maintenance

Open Wayfinder has a scheduled three-times-weekly research watch. A scheduled task is not proof that a run succeeded or that this file was updated. Each update should record date, source, changed capability, scope, actual test status and uncertainty. Never put account-specific connection details or credentials in this public file.
