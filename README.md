# shell-tools

[![NPM Version](https://img.shields.io/npm/v/shell-tools)](https://www.npmjs.com/package/shell-tools)
[![Build Size](https://badgen.net/bundlephobia/minzip/shell-tools)](#)
[![NPM Downloads](https://img.shields.io/npm/dw/shell-tools)](https://npmtrends.com/shell-tools)

Functions for easy shell handling

## Installation

```sh
npm i -D shell-tools
```

## Usage

It can be used both as ES module (import) or CommonJS (require).

```js
import { sh, system, systemSync } from "shell-tools";

// You can use only one argument.
const output   = sh ("ls -la");
const exitCode = await system ("ls -la");
const exitCode = systemSync ("ls -la");

// Or you can use multiple arguments, which is safer.
const output   = sh ("ls", "-la");
const exitCode = await system ("ls", "-la");
const exitCode = systemSync ("ls", "-la");
```
