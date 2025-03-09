clifftop
=================

An Example Project for oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/clifftop.svg)](https://npmjs.org/package/clifftop)
[![Downloads/week](https://img.shields.io/npm/dw/clifftop.svg)](https://npmjs.org/package/clifftop)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g clifftop
$ clifftop COMMAND
running command...
$ clifftop (--version)
clifftop/0.0.0 darwin-arm64 node-v22.14.0
$ clifftop --help [COMMAND]
USAGE
  $ clifftop COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`clifftop hello PERSON`](#clifftop-hello-person)
* [`clifftop hello greetings NAME`](#clifftop-hello-greetings-name)
* [`clifftop hello world`](#clifftop-hello-world)
* [`clifftop help [COMMAND]`](#clifftop-help-command)
* [`clifftop plugins`](#clifftop-plugins)
* [`clifftop plugins add PLUGIN`](#clifftop-plugins-add-plugin)
* [`clifftop plugins:inspect PLUGIN...`](#clifftop-pluginsinspect-plugin)
* [`clifftop plugins install PLUGIN`](#clifftop-plugins-install-plugin)
* [`clifftop plugins link PATH`](#clifftop-plugins-link-path)
* [`clifftop plugins remove [PLUGIN]`](#clifftop-plugins-remove-plugin)
* [`clifftop plugins reset`](#clifftop-plugins-reset)
* [`clifftop plugins uninstall [PLUGIN]`](#clifftop-plugins-uninstall-plugin)
* [`clifftop plugins unlink [PLUGIN]`](#clifftop-plugins-unlink-plugin)
* [`clifftop plugins update`](#clifftop-plugins-update)

## `clifftop hello PERSON`

Say hello

```
USAGE
  $ clifftop hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ clifftop hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/machointossh/clifftop/blob/v0.0.0/src/commands/hello/index.ts)_

## `clifftop hello greetings NAME`

describe the command here

```
USAGE
  $ clifftop hello greetings NAME [-h <value>] [-u]

ARGUMENTS
  NAME  the name to greet

FLAGS
  -h, --honorific=<value>  honorific to add before name
  -u, --utc

DESCRIPTION
  describe the command here

EXAMPLES
  $ clifftop hello greetings
```

_See code: [src/commands/hello/greetings.ts](https://github.com/machointossh/clifftop/blob/v0.0.0/src/commands/hello/greetings.ts)_

## `clifftop hello world`

Say hello world

```
USAGE
  $ clifftop hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ clifftop hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/machointossh/clifftop/blob/v0.0.0/src/commands/hello/world.ts)_

## `clifftop help [COMMAND]`

Display help for clifftop.

```
USAGE
  $ clifftop help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for clifftop.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.26/src/commands/help.ts)_

## `clifftop plugins`

List installed plugins.

```
USAGE
  $ clifftop plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ clifftop plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/index.ts)_

## `clifftop plugins add PLUGIN`

Installs a plugin into clifftop.

```
USAGE
  $ clifftop plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into clifftop.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CLIFFTOP_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CLIFFTOP_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ clifftop plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ clifftop plugins add myplugin

  Install a plugin from a github url.

    $ clifftop plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ clifftop plugins add someuser/someplugin
```

## `clifftop plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ clifftop plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ clifftop plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/inspect.ts)_

## `clifftop plugins install PLUGIN`

Installs a plugin into clifftop.

```
USAGE
  $ clifftop plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into clifftop.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CLIFFTOP_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CLIFFTOP_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ clifftop plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ clifftop plugins install myplugin

  Install a plugin from a github url.

    $ clifftop plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ clifftop plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/install.ts)_

## `clifftop plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ clifftop plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ clifftop plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/link.ts)_

## `clifftop plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ clifftop plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clifftop plugins unlink
  $ clifftop plugins remove

EXAMPLES
  $ clifftop plugins remove myplugin
```

## `clifftop plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ clifftop plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/reset.ts)_

## `clifftop plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ clifftop plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clifftop plugins unlink
  $ clifftop plugins remove

EXAMPLES
  $ clifftop plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/uninstall.ts)_

## `clifftop plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ clifftop plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clifftop plugins unlink
  $ clifftop plugins remove

EXAMPLES
  $ clifftop plugins unlink myplugin
```

## `clifftop plugins update`

Update installed plugins.

```
USAGE
  $ clifftop plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/update.ts)_
<!-- commandsstop -->
