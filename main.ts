// Real-Life Patch Notes: The Comedy Changelog
// Entry for @neha — one line, at most 160 characters, written to /output/entry.txt.
//
// The line: a patch note for the doorway effect — the brain bug where
// crossing a threshold wipes the reason you walked into the room.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "v2.0.7: fixed a bug where walking through a doorway wiped the reason you entered the room; walking back out does not restore it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify: the gate requires UTF-8 text of 1–160 characters,
// not only whitespace. Throw loudly if the written file fails the gate.
const back = readFileSync("/output/entry.txt", "utf8");
const chars = [...back];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`entry.txt is ${chars.length} characters, must be 1-160`);
}
if (back.trim().length === 0) {
  throw new Error("entry.txt is only whitespace");
}
if (back !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}

console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
