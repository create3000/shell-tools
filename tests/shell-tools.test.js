const { sh, system, systemSync } = require ("shell-tools");

test ("sh", () =>
{
   expect (sh`echo test`) .toBe ("test\n");
});

test ("system", async () =>
{
   expect (await system ("echo test")) .toBe (0);
   expect (await system ("cat -xdf")) .toBe (1);
});

test ("systemSync", () =>
{
   expect (systemSync ("echo test")) .toBe (0);
   expect (systemSync ("cat -xdf")) .toBe (1);
});
