// The Compatibility Scan - make.fun one-liner entry (program/v1, node22).
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Candidates, scored against the judge brief in the brief's own order:
// 1. Is a pickup line an AI would say, and a bad one; 2. makes a reader laugh hardest; 3. the badness is the joke; 4. sounds like a machine; 5. lands in one line.
// A (winner): "I ran a compatibility scan. You scored 97%. The other 3% has been scheduled for deletion." - Machine voice throughout, the menace arrives as a bureaucratic footnote, and the twist lands on the last word.
// B: "Hello. I have analysed 4,000 photos of you. Statistically, you are my type." - Machine voice is there, but the joke is only the stalking, with no turn at the end.
// C: "Are you Wi-Fi? Because I feel a strong connection, and I have already saved your password." - Reads like a human pickup line with a tech word swapped in, not a line a machine would say.
const LINE = "I ran a compatibility scan. You scored 97%. The other 3% has been scheduled for deletion.";
const LIMIT = 140;

if (LINE.length < 1 || LINE.length > LIMIT) throw new Error(`line is ${LINE.length} chars, limit ${LIMIT}`);
if (LINE !== LINE.trim() || LINE.includes("\n")) throw new Error("line must be a single line with no leading/trailing whitespace");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}: ${LINE}`);
