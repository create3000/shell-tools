# shell-tools

Functions for easy shell handling

## Installation

```sh
npm i -D shell-tools
```

## Usage

It can be used both as ES module (import) or CommonJS (require).

```js
import { sh, system } from "shell-tools";

const output = sh`ls -la`;

const exitCode = await system ("ls -la");
```
