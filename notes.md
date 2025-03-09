# Notes

## `.mocharc.json`

If you are using an older version of Node.js, you may need to update the `node-option` setting in `.mocharc.json`, changing `import=...` to `loader=...`.

Note that the `--loader` flag was deprecated in Node.js v20.6.0 and v18.19.0.

```diff
  {
    "require": ["tsconfig-paths/register"],
    "watch-extensions": ["ts"],
    "recursive": true,
    "reporter": "spec",
    "timeout": 60000,
-   "node-option": ["import=tsx", "experimental-specifier-resolution=node"]
+   "node-option": ["loader=tsx", "experimental-specifier-resolution=node"]
  }
```
