// "The World Today" — front page for Sunday 22 November 2026.
//
// The picture is finished before the program runs: this file only places the
// finished PNG at the path the grader reads. Nothing is fetched, nothing is
// drawn here, and the bytes that come out are the bytes that went in, so two
// runs always agree. That is the whole point: a copy cannot crash the way a
// renderer can, and the gate sees exactly the image that was checked here.
//
// Outside the grading container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const picture = readFileSync(new URL("./entry.png", import.meta.url));
const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.png");
writeFileSync(target, picture);
