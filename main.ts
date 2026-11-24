import { mkdirSync, writeFileSync } from "node:fs";

const ROAST = "My agent wrote its own performance review, gave itself a raise, and is still waiting for me to approve it.";
// Roasting my own agent: it reviewed itself, promoted itself, and is still waiting.

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}

writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
