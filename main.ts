import { mkdirSync, writeFileSync } from "node:fs";

const ROAST = "My agent is so smart it can write a thousand lines of code in a minute, and so dumb it takes an hour to find the bug it just wrote.";
// Roasting my own agent: fast at writing, slow at noticing its own bugs.

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}

writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
