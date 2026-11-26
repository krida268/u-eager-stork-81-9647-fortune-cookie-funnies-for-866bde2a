import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune cookie message for a software engineer, a single line.
const fortune =
  "You will meet a stranger in production. It is your own code from last year.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
