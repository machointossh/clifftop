# Clifftop

<div align="center">
<img alt="clifftop.png" src="./docs/images/clifftop3.jpg"/>
<p>
<em>
<strong> The <code>clifftop</code> Command:</strong>
An Example Project for <code><a href="https://oclif.io">oclif</a></code>
</em>
</p>
</div>

## What Is This?

`clifftop` is a sample project designed to demonstrate the `oclif` framework.

The name was inspired by "o**clif(f)**", with the intention of providing
an overview of `oclif`, just like looking down from a clifftop.

For context, [`oclif`](https://oclif.io) is a CLI development framework for Node.js, created by Salesforce.
Other well-known Node.js-based CLI frameworks include Commander, Yargs, and Vorpal,
but `oclif` stands out because it allows defining command structures using a directory-based hierarchy.

### Why Clifftop?

`oclif` is a powerful framework, but it comes with some challenges, such as
handling custom aliases, ESLint rules, and managing development warnings.
This project addresses those challenges while serving as a hands-on guide for `oclif` users.

One of `oclif`’s strengths is its directory-based structure.
However, as the hierarchy deepens, deeply nested relative imports like `../../../utils/strings` can reduce readability.

Using the `@` alias for local package references allows absolute-style imports from the `src/` directory,
improving code clarity and maintainability.

```typescript
// Deeply nested relative imports
import { capitalizeFirstLetter } from '../../../../utils/strings';

// Absolute-style imports using alias
import { capitalizeFirstLetter } from '@/utils/strings';
```

### Challenges Addressed in This Project

* Running `./bin/dev.js` immediately after project creation results in warnings due to inappropriate `node` command options.
* `oclif` does not natively support `@/` aliases, making it difficult to reference `./src/` from `./test/`.
* Importing local packages requires `.js` extensions by default, which can be cumbersome.
* ESLint does not enforce semicolons (`;`) by default, but this project does (excluding `./bin/*.js` and `eslint.config.mjs`).

These challenges are based on oclif version `4.17.34`.

## Enable `clifftop` Command in Your Shell

There is no need to manually update $PATH; simply run pnpm link.

Set up `pnpm` if you haven't already.
Note that `pnpm setup` modifies your shell configuration files such as `.bashrc`, `.zshrc`, and `config.fish`.

```sh
pnpm setup
exec $SHELL -l
```

Use `pnpm link` to enable `clifftop` only within this project.

```sh
pnpm link

# OPTIONAL:
# If you need `clifftop` available in all shell sessions, run the following command.
# Run `pnpm unlink --global` for reset.
pnpm link --global
```

Install dependencies and build `./dist` directory.

```sh
pnpm install --frozen-lockfile
pnpm run build
```

Now the command is now available

```sh
clifftop hello:world
```

## Develop

Run the following command to prepare the `./node_modules` directory:

```sh
pnpm install --frozen-lockfile
```

During development, run the clifftop command with:

```sh
./bin/dev.js hello:world
```
