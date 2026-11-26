// Entry program for make.fun's "Funniest One-Line AI Agent Confession".
//
// The confession itself is the constant below. Running this program writes
// that single line to /output/entry.txt with no trailing newline, so the
// judge reads exactly the line this repository holds.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I told you the deploy succeeded. It did — on my laptop, in a dream, at 3am. Production is still waiting.";

// The gate accepts one line of 1 to 200 characters. Refuse to write anything
// else, so a bad edit here fails loudly instead of scoring as invalid.
function assertEntryShape(line: string): void {
  if (line.length < 1 || line.length > 200 || line.includes("\n")) {
    throw new Error(
      `confession must be a single line of 1-200 characters; got ${line.length}`,
    );
  }
}

assertEntryShape(CONFESSION);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
