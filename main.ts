// The Funniest Office Joke, Judged Head to Head
// (make.fun bounty u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
//
// Writes a single one-line office joke to /output/entry.txt.
// The gate requires UTF-8 text of 1-200 characters, not only whitespace,
// so the program validates the line before writing it and writes it with
// no trailing newline: the file is exactly the joke, nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Why this line: the narrator tries to end the reply-all storm and becomes
// its newest cause — the solution is the problem. Setup and turn in one
// line, a universal office moment, the punchline (the head-count) last,
// and every word earning its place at 83 characters.
const JOKE =
  "I hit reply-all to ask everyone to stop replying all. 47 people have agreed so far.";

const OUTPUT_PATH = "/output/entry.txt";

function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(JOKE);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
console.log(`wrote ${[...JOKE].length} characters to ${OUTPUT_PATH}`);
