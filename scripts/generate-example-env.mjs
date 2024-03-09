import { readFileSync, writeFileSync } from 'fs';

const fileEnv = readFileSync('.env', 'utf8');

const arr = fileEnv
  .split(/\n|\r/)
  .map((line) => line.trim())
  .map((line) => (line.startsWith('#') ? '' : line))
  .filter(Boolean)
  .map((line) => line.split('=')[0] + '=""');

writeFileSync('.example.env', arr.join('\n'));
