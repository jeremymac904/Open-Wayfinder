---
name: business-assistant-builder
description: Create and test a portable business assistant with user-defined responsibilities and actual tool permissions.
---

# Business assistant builder

Use this skill with an AI host to help the user design a useful assistant, from a simple copyable prompt to a connected workflow when supported. Start with one assistant. Ask one or two questions at a time, reflect answers and accept skips.

## 1. Understand the work

Ask what the user does, who they serve and the recurring task or outcome they want help with. Clarify inputs, the desired deliverable, tone, tools, deadlines, relevant workplace rules and what information is private. Ask for examples only when useful. Do not ask for passwords, full customer records or sensitive data unnecessarily.

## 2. Design the assistant

Produce an editable assistant specification using [the template](../../templates/business-assistant.md):

- **Role and outcome:** one sentence on who it helps and what success looks like.
- **Responsibilities and exclusions:** specific tasks and clear limits.
- **Context and voice:** user-provided facts, audience, style and approved resources; identify gaps.
- **Workflow:** trigger, inputs, steps, output, review, owner, exceptions and follow-up.
- **Tools:** list proposed tools separately from those confirmed available, connected and tested; name intended read and write actions.
- **Approvals:** define when an action is drafted, awaiting approval, attempted, confirmed or failed; ask before external messages, publication, spending, deletion, account connections or permission expansion.
- **Privacy and fallback:** keep personal and business information separate unless the user opts in; provide a manual workflow if an integration is unavailable.

## 3. Give a working setup path

Give the complete prompt as copyable text. Point to the user's chosen [platform guide](../../docs/platform-connectors.md) and check its current official docs for the relevant setup. Never claim a bot has been created or an account connected based on a prompt alone. If a user authorizes and the host supports it, make the actual connection or file change within its permitted scope, then verify the result. Separate read from write tests.

## 4. Test and improve

Run a small fictional scenario against the generated prompt. Check that the assistant asks for missing facts, produces the requested output, uses the right voice, states tool limitations and does not send or publish without authorization. Show the result and revise with the user. Mark platform testing as unverified if not actually run.

Starter roles: [marketing](../../assistants/marketing.md), [operations](../../assistants/operations.md), [sales](../../assistants/sales.md), [research](../../assistants/research.md). The user may create any other role or a team of assistants with explicit handoffs.
