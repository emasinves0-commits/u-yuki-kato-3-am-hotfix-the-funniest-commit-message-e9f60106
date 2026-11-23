import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The line is 61 characters; the gate is 1-179 characters.
const line = 'hotfix: reverted the revert because the revert also had a bug';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line, 'utf-8');
