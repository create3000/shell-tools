const child_process = require ("child_process");

module .exports = {
   sh (command, ... args)
   {
      try
      {
         if (args .length)
         {
            return child_process .execFileSync (command, args,
            {
               encoding: "utf8",
               maxBuffer: Infinity,
               windowsHide: true,
            });
         }
         else
         {
            return child_process .execSync (command,
            {
               encoding: "utf8",
               maxBuffer: Infinity,
               windowsHide: true,
            });
         }
      }
      catch (error)
      {
         throw new Error (error .stderr);
      }
   },
   system (command, ... args)
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
   },
   systemSync (command, ... args)
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
   },
};
