# Get started

Open Wayfinder is a set of instructions and templates you can use with an AI platform. Start with one coach and build from there.

Before installing, choose the current [platform adapter](../adapters/) and review the dated [platform capability guide](platform-connectors.md). A provider-documented feature is not proof that it is enabled, connected or tested on your account.

## 1. Start a conversation

Open the AI service or local model you prefer. Copy the entire [coach persona](../persona/PERSONA.md) into a new conversation, or place it in the host's instructions if supported. Then say:

> Help me set up Open Wayfinder. Start with one question.

Copy the [onboarding guide](../skills/onboarding/SKILL.md) into the conversation too. On hosts that support the Agent Skills standard or direct \`SKILL.md\` import, follow the adapter's install location; otherwise paste the file contents. A model cannot follow a linked skill file unless you provide its contents or it has verified access to that file. You can skip any question.

## 2. Keep your profile private

Copy the [profile template](../templates/soul.md) into a private document or local file named `soul.md`. Share only what you want the coach to use. If your AI host cannot read and write the file, paste relevant sections into the chat and copy approved updates back yourself.

A file in a public GitHub repository is public. The included `.gitignore` reduces accidental commits of a local `user-data/` folder, but it does not make GitHub uploads private or protect files already tracked.

## 3. Check in

Copy the [daily check-in](../skills/daily-check-in/SKILL.md) or [weekly review](../skills/weekly-review/SKILL.md) instructions into your conversation as needed. For a work assistant, copy the [business assistant builder](../skills/business-assistant-builder/SKILL.md) and [assistant template](../templates/business-assistant.md) into a separate conversation. A prompt referencing a file does not make its contents available automatically.

## What to expect

This kit contains prompts and worksheets. Whether a host can remember your profile, access files, make a dashboard, use tools, connect accounts, or send reminders depends on that host and your settings. An uploaded file may be a snapshot rather than a live connection. Verify access and save important changes yourself when needed.

For privacy and professional boundaries, read [Privacy and safety](privacy-and-safety.md).

**Capability review:** Platform documentation last rechecked 2026-11-18. No adapter should be described as connected or end-to-end tested unless a dated account-specific test has been recorded privately.
