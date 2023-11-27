import child_process from "child_process";

export function sh (strings, ... values)
{
   return child_process .execSync (String .raw ({ raw: strings }, ... values), { encoding: "utf8", maxBuffer: Infinity });
}

export function system (command)
{
   return new Promise (async (resolve, reject) =>
   {
      const childProcess = child_process .exec (command);

      childProcess .stdout .on ("data", data => process .stdout .write (data));
      childProcess .stderr .on ("data", data => process .stderr .write (data));

      childProcess .on ("exit",  resolve);
      childProcess .on ("error", reject);
   });
}
