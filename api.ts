import { getAllUsage } from './src/lib/usage';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 6767;

Bun.serve({
  port: PORT,
  routes: {
    "/api/usage": {
      GET: async () => {
        const usage = await getAllUsage();
        return Response.json(usage);
      },
    },
    "/api/usage/claude": {
      GET: async () => {
        const { getClaudeUsage } = await import('./src/lib/usage');
        return Response.json(await getClaudeUsage());
      },
    },
    "/api/usage/codex": {
      GET: async () => {
        const { getCodexUsage } = await import('./src/lib/usage');
        return Response.json(await getCodexUsage());
      },
    },
    "/api/usage/zai": {
      GET: async () => {
        const { getZaiUsage } = await import('./src/lib/usage');
        return Response.json(await getZaiUsage());
      },
    },
    "/api/usage/openrouter": {
      GET: async () => {
        const { getOpenRouterUsage } = await import('./src/lib/usage');
        return Response.json(await getOpenRouterUsage());
      },
    },
    "/api/usage/opencode-zen": {
      GET: async () => {
        const { getOpencodeZenUsage } = await import('./src/lib/usage');
        return Response.json(await getOpencodeZenUsage());
      },
    },
  },
});

console.log(`API server running at http://localhost:${PORT}`);
