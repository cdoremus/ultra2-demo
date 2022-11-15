import { createBuilder } from "ultra/build.ts";

const builder = createBuilder({
  browserEntrypoint: import.meta.resolve("./client.tsx"),
  serverEntrypoint: import.meta.resolve("./server.tsx"),
  inlineServerDynamicImports: true,
});

builder.ignore([
  "./README.md",
  "./importMap.json",
]);

// deno-lint-ignore no-unused-vars
const result = await builder.build();
