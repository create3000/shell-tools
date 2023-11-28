import child_process from "child_process";

export function sh (strings, ... values)
{
   try
   {
      const command = String .raw ({ raw: strings }, ... values);

      return child_process .execSync (command,
      {
         encoding: "utf8",
         maxBuffer: Infinity,
         windowsHide: true,
      });
   }
   catch (error)
   {
      throw new Error (error .stderr);
   }
}

export function system (command, ... args)
{
   return new Promise (async (resolve, reject) =>
   {
      if (args .length)
      {
         const childProcess = child_process .execFile (command, args, { windowsHide: true });

         childProcess .stdout .on ("data", data => process .stdout .write (data));
         childProcess .stderr .on ("data", data => process .stderr .write (data));

         childProcess .on ("exit",  resolve);
         childProcess .on ("error", reject);
      }
      else
      {
         const childProcess = child_process .exec (command, { windowsHide: true });

         childProcess .stdout .on ("data", data => process .stdout .write (data));
         childProcess .stderr .on ("data", data => process .stderr .write (data));

         childProcess .on ("exit",  resolve);
         childProcess .on ("error", reject);
      }
   });
}

export function systemSync (command, ... args)
{
   try
   {
      if (args .length)
      {
         child_process .execFileSync (command, args,
         {
            stdio: "inherit",
            stderr: "inherit",
            windowsHide: true,
         });

         return 0;
      }
      else
      {
         child_process .execSync (command,
         {
            stdio: "inherit",
            stderr: "inherit",
            windowsHide: true,
         });
      }

      return 0;
   }
   catch (error)
   {
      if (error .stderr)
         process .stderr .write (error .stderr);

      return error .status;
   }
}
