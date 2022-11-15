import { createBuilder } from "ultra/build.ts";

const builder = createBuilder({
  browserEntrypoint: import.meta.resolve("./client.tsx"),
  serverEntrypoint: import.meta.resolve("./server.tsx"),
  // inline dynamic import modules for Deno Deploy support
  inlineServerDynamicImports: true,
});

builder.ignore([
  "./.git/**",
  "./.vscode/**",
  "./.github/**",
  "./README.md",
  "./importMap.json",
  "./.gitignore",
]);

// deno-lint-ignore no-unused-vars
const result = await builder.build();
