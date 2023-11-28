import child_process from "child_process";

export function sh (strings, ... values)
{
   const command = String .raw ({ raw: strings }, ... values);

   return child_process .execSync (command,
   {
      encoding: "utf8",
      maxBuffer: Infinity,
      windowsHide: true,
   });
}

export function system (command)
{
   return new Promise (async (resolve, reject) =>
   {
      const childProcess = child_process .exec (command, { windowsHide: true });

      childProcess .stdout .on ("data", data => process .stdout .write (data));
      childProcess .stderr .on ("data", data => process .stderr .write (data));

      childProcess .on ("exit",  resolve);
      childProcess .on ("error", reject);
   });
}

export function systemSync (command)
{
   try
   {
      child_process .execSync (command,
      {
         stdio: "inherit",
         stderr: "inherit",
         windowsHide: true,
      });

      return 0;
   }
   catch (error)
   {
      if (error .stderr)
         process .stderr .write (error .stderr);

      return error .status;
   }
}
