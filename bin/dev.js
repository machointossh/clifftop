#!/usr/bin/env -S node --loader @esbuild-kit/esm-loader --no-warnings=ExperimentalWarning

import {execute} from '@oclif/core'

await execute({development: true, dir: import.meta.url})
