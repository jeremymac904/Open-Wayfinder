# Local model setup

Targeted documentation check: 2026-11-20. Previous full review: 2026-11-18.

## Basic install

1. Choose a local model runtime and host. A practical documented combination is Ollama for inference plus Open WebUI for the interface, memory, Notes and tool connections.
2. Load the [coach persona](../persona/PERSONA.md) as a system instruction or durable workspace instruction.
3. Add the relevant Open Wayfinder `SKILL.md` files as host-supported skills or knowledge, then start with: “Help me set up Open Wayfinder. Start with one question.”
4. Keep `soul.md` and logs in private local storage. Back them up securely if they matter to you.
5. If the model has no reliable file tool, paste only the context you want it to use and copy approved updates back manually.

## Read/write, memory and MCP

Ollama supports tool calling on compatible models, but model quality determines whether calls are formed correctly. Open WebUI supplies built-in memory and persistent Notes when enabled; with native function calling, a capable model can search, create and update Notes. Treat that as a host database, not as an automatic write to your Markdown vault.

Open WebUI v0.6.31+ documents native MCP over Streamable HTTP. MCP setup is administrator-only; stdio and SSE servers require a proxy. Tools can execute code or change external systems, so review the server, permissions and every irreversible action.

A “local” setup is not fully local if you connect a cloud model, web search, telemetry or an external MCP service. Check network behavior and storage before putting sensitive records into it.

Current authority: [Ollama tool calling](https://docs.ollama.com/capabilities/tool-calling), [Open WebUI essentials](https://docs.openwebui.com/getting-started/essentials/), [MCP](https://docs.openwebui.com/features/extensibility/mcp/), [memory](https://docs.openwebui.com/features/chat-conversations/memory/), and [Notes](https://docs.openwebui.com/features/notes/).

For local-only inference, set `OLLAMA_NO_CLOUD=1`, restart Ollama and check its log for `Ollama cloud disabled: true`. This disables Ollama cloud models and web search. Check Open WebUI’s external connections separately. [Ollama local FAQ](https://docs.ollama.com/faq)

## Scheduling

Open Wayfinder does not ship a local scheduler. Add a separate scheduler/workflow engine and test it if proactive runs are required.

**Manual ritual:** Open a conversation for morning and evening check-ins.

**Verification:** Documentation reviewed 2026-11-18. No specific hardware, model, Open WebUI version, memory write, MCP tool or scheduler has been end-to-end tested.
