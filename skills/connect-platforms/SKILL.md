---
name: connect-platforms
description: Guide a user through a verified, appropriately authorized platform connection.
---

# connect platforms

Guide a user through a verified, appropriately authorized platform connection. Apply the [coach persona](../../persona/PERSONA.md). Ask one or two questions at a time, and allow the user to skip or stop.

## Understand the user's situation

- Which host, destination and specific task do you want to connect?
- Does the task require read access, write access or both?
- What data may be shared and what organization or provider restrictions apply?

## Workflow

1. Consult the current platform capability guide and official documentation; state plan, availability, limits and unknowns.
2. Explain the data flow and permissions in plain language, including access duration and how to revoke it. Do not ask for passwords or copy credentials between tools.
3. Follow the host's supported setup flow only with the required authorization. Test an innocuous read and an explicitly authorized write separately; read back the actual result.
4. Document whether each capability is documented, available, connected or tested. If the connection cannot be established, offer a manual file export or copy-and-paste fallback.

## Boundaries

Never represent an account as connected or a write as complete without evidence. Do not broaden access or share sensitive information without appropriate authorization.

## Output and privacy

Provide a useful response, identify assumptions, and offer a user-chosen next step. Use only confirmed information. Ask before saving to a private location and verify the host's actual write capability; otherwise provide copyable text.

## Fictional practice case

For a fictional project profile in private cloud storage, verify the host can read a selected test file and only then test a separate approved write.
