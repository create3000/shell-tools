# shell-tools

Functions for easy shell handling

## Installation

```sh
npm i -D shell-tools
```

## Usage

It can be used both as ES module (import) or CommonJS (require).

```js
import { sh, system, systemSync } from "shell-tools";

// Use template string modifier to get the output of the command.
const output = sh`ls -la`;

// You can use only one argument.
const exitCode = await system ("ls -la");
const exitCode = systemSync ("ls -la");

// Or you can use multiple arguments, which is safer.
const exitCode = await system ("ls", "-la");
const exitCode = systemSync ("ls", "-la");
```
