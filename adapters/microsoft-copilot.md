# Microsoft 365 Copilot setup

Last checked against official documentation: 2026-11-18.

## Basic install

1. Start a conversation and provide [the coach persona](../persona/PERSONA.md), asking for one setup question at a time.
2. For work, use the [business assistant builder](../skills/business-assistant-builder/SKILL.md) and follow your organization's information-handling rules.
3. Keep private coaching records outside shared Microsoft 365 locations unless you intentionally choose and control that storage.

## Connectors, agents and write actions

Microsoft 365 Copilot connectors bring external content into Copilot search and grounding. They are read-only by default. A write to an external system requires an action connector, Power Platform connector or API plugin, plus the necessary license, administrator policy and source-system permission.

Synced connectors copy/index content into Microsoft 365; federated connectors retrieve from the source. These are different privacy and freshness models. The connector license matrix says basic Microsoft 365 can expose synced connector data in Microsoft Search, while Copilot grounding/federated use requires an eligible Copilot add-on/E7 or a qualifying agent license.

Custom agents can combine knowledge connectors with actions through Copilot Studio or Microsoft 365 agent tooling. Scheduling or event automation depends on Copilot Studio, Power Automate or another configured workflow; a knowledge connector alone is not a scheduler.

Current authority: [connector overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/overview), [connector licensing](https://learn.microsoft.com/microsoftsearch/licensing), and [extensibility FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/faq).

**Manual ritual:** Start a conversation for a morning check-in or evening review.

**Verification:** Documentation reviewed 2026-11-18. No tenant license, connector, custom agent, external write or scheduled workflow has been tested by Open Wayfinder.
