// Writes the entry: one self-contained funny line of at most 140 characters.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "My smoke detector reviews every meal I cook, and like any real critic, it starts screaming before I've even plated.";
const limit = 140;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
