# Microsoft 365 Copilot setup

Targeted documentation check: 2026-11-23. Previous full review: 2026-11-18.

## Basic install

1. Start a conversation and provide [the coach persona](../persona/PERSONA.md), asking for one setup question at a time.
2. For work, use the [business assistant builder](../skills/business-assistant-builder/SKILL.md) and follow your organization's information-handling rules.
3. Keep private coaching records outside shared Microsoft 365 locations unless you intentionally choose and control that storage.

## Connectors, agents and write actions

Microsoft lists reusable skills in Copilot Chat as generally available. Users can select a skill or let Chat choose one. [November release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/whats-new#november-2026)

Synced connectors supply indexed knowledge. A federated MCP connector can also create, update or delete records when its publisher exposes those tools and the user has source-system permission. Writes initially prompt for approval. Power Platform connectors and API plugins offer other action paths. [Federated connector actions](https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/federated-connectors-overview#write-update-and-delete-actions)

Synced connectors copy/index content into Microsoft 365; federated connectors retrieve from the source. These are different privacy and freshness models. The connector license matrix says basic Microsoft 365 can expose synced connector data in Microsoft Search, while Copilot grounding requires the add-on or E7. Federated connectors require a Microsoft 365 Copilot add-on or E7. Copilot Studio and pay-as-you-go support synced content in agents only.

Custom agents can combine knowledge connectors with actions through Copilot Studio or Microsoft 365 agent tooling. Licensed users can [schedule a recurring prompt in Copilot Chat](https://support.microsoft.com/en-us/microsoft-365-copilot/schedule-your-most-used-copilot-prompts) on web or desktop. Microsoft describes the Task Hub interface as rolling out.

Current authority: [connector overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/overview), [connector licensing](https://learn.microsoft.com/microsoftsearch/licensing), and [extensibility FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/faq).

**Manual ritual:** Start a conversation for a morning check-in or evening review.

**Verification:** Documentation reviewed 2026-11-18. No tenant license, connector, custom agent, external write or scheduled workflow has been tested by Open Wayfinder.
