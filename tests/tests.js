const { sh, system } = require ("shell-tools");

console .log (sh`ls -la`);
system ("ls -la")
