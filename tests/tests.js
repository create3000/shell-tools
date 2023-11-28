const { sh, system, systemSync } = require ("shell-tools");

console .log (sh`echo Ok 1/2`);
system ("echo Ok 2/2");
console .log (systemSync ("cat -xdf"));
